"use client";

import { useState, useEffect, useCallback } from "react";

interface Coupon {
  id: string;
  title: string;
  description: string;
  discount: string;
  valid_until: string;
  code: string;
}

export default function CouponsPage() {
  const [coupons, setCoupons] = useState<Coupon[]>([]);
  const [loading, setLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);
  const [showAdminLogin, setShowAdminLogin] = useState(false);
  const [password, setPassword] = useState("");
  const [editingCoupon, setEditingCoupon] = useState<Coupon | null>(null);
  const [passwordError, setPasswordError] = useState(false);
  const [saving, setSaving] = useState(false);
  const [saveError, setSaveError] = useState<string | null>(null);

  const adminPassword = () => sessionStorage.getItem("haywardtire_admin_pw") || "";

  const fetchCoupons = useCallback(async () => {
    try {
      const res = await fetch("/api/coupons");
      if (res.ok) {
        const data = await res.json();
        setCoupons(
          data.map((c: Record<string, string>) => ({
            id: c.id,
            title: c.title,
            description: c.description,
            discount: c.discount,
            valid_until: c.valid_until,
            code: c.code,
          }))
        );
      }
    } catch {
      /* network error — keep existing state */
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchCoupons();
    const pw = sessionStorage.getItem("haywardtire_admin_pw");
    if (pw) setIsAdmin(true);
  }, [fetchCoupons]);

  async function handleAdminLogin() {
    try {
      const res = await fetch("/api/coupons/auth", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-admin-password": password,
        },
      });
      if (res.ok) {
        setIsAdmin(true);
        sessionStorage.setItem("haywardtire_admin_pw", password);
        setShowAdminLogin(false);
        setPassword("");
        setPasswordError(false);
      } else {
        setPasswordError(true);
      }
    } catch {
      setPasswordError(true);
    }
  }

  function handleAdminLogout() {
    setIsAdmin(false);
    sessionStorage.removeItem("haywardtire_admin_pw");
  }

  async function handleSaveCoupon() {
    if (!editingCoupon) return;
    setSaving(true);
    setSaveError(null);

    const isNew = !coupons.find((c) => c.id === editingCoupon.id);
    const method = isNew ? "POST" : "PUT";

    try {
      const res = await fetch("/api/coupons", {
        method,
        headers: {
          "Content-Type": "application/json",
          "x-admin-password": adminPassword(),
        },
        body: JSON.stringify({
          id: editingCoupon.id,
          title: editingCoupon.title,
          description: editingCoupon.description,
          discount: editingCoupon.discount,
          validUntil: editingCoupon.valid_until,
          code: editingCoupon.code,
        }),
      });
      if (res.ok) {
        await fetchCoupons();
        setEditingCoupon(null);
      } else if (res.status === 401) {
        setSaveError(
          "Your admin session expired. Please log out and log back in."
        );
      } else {
        let message = `Save failed (error ${res.status}).`;
        try {
          const data = await res.json();
          if (data?.error) message = data.error;
        } catch {
          /* response had no JSON body */
        }
        setSaveError(message);
      }
    } catch {
      setSaveError("Network error — please check your connection and try again.");
    } finally {
      setSaving(false);
    }
  }

  async function handleDeleteCoupon(id: string) {
    await fetch("/api/coupons", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "x-admin-password": adminPassword(),
      },
      body: JSON.stringify({ id }),
    });
    await fetchCoupons();
  }

  function handleAddNew() {
    setEditingCoupon({
      id: "",
      title: "",
      description: "",
      discount: "",
      valid_until: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000)
        .toISOString()
        .split("T")[0],
      code: "",
    });
  }

  return (
    <>
      {/* Hero */}
      <section className="bg-dark py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl font-bold text-white sm:text-5xl">
            Tire Coupons &amp; <span className="text-accent">Deals in Hayward</span>
          </h1>
          <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
            Save on new tires, brake service, and flat tire repairs at Hayward
            Tire. Print or show these coupons on your phone when you visit our
            shop on Mission Blvd.
          </p>
        </div>
      </section>

      <section className="bg-white py-16" aria-label="Active tire coupons and promotions">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          {/* Admin Toggle */}
          <div className="flex justify-end mb-8">
            {isAdmin ? (
              <div className="flex items-center gap-3">
                <span className="text-sm text-green-600 font-medium flex items-center gap-1">
                  <span className="h-2 w-2 rounded-full bg-green-500" />
                  Admin Mode
                </span>
                <button
                  onClick={handleAdminLogout}
                  className="text-sm text-gray-500 hover:text-gray-700 underline"
                >
                  Log out
                </button>
              </div>
            ) : (
              <button
                onClick={() => setShowAdminLogin(true)}
                className="text-sm text-gray-400 hover:text-gray-600 transition-colors"
              >
                Admin Login
              </button>
            )}
          </div>

          {/* Admin Login Modal */}
          {showAdminLogin && (
            <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/50 p-0 sm:p-4">
              <div className="w-full max-w-sm rounded-t-2xl sm:rounded-2xl bg-white p-6 sm:p-8 shadow-xl">
                <h3 className="text-xl font-bold text-dark mb-4">
                  Admin Login
                </h3>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    setPasswordError(false);
                  }}
                  onKeyDown={(e) => e.key === "Enter" && handleAdminLogin()}
                  placeholder="Enter admin password"
                  className={`w-full rounded-lg border px-4 py-3 text-sm outline-none transition-all ${
                    passwordError
                      ? "border-red-500 focus:ring-red-200"
                      : "border-gray-300 focus:ring-primary/20"
                  } focus:ring-2`}
                />
                {passwordError && (
                  <p className="mt-2 text-sm text-red-500">
                    Incorrect password
                  </p>
                )}
                <div className="mt-4 flex gap-3">
                  <button
                    onClick={handleAdminLogin}
                    className="flex-1 rounded-lg bg-primary px-4 py-2.5 text-sm font-bold text-white hover:bg-primary-dark"
                  >
                    Login
                  </button>
                  <button
                    onClick={() => {
                      setShowAdminLogin(false);
                      setPassword("");
                      setPasswordError(false);
                    }}
                    className="flex-1 rounded-lg border border-gray-300 px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Editing Modal */}
          {editingCoupon && (
            <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/50 p-0 sm:p-4">
              <div className="w-full max-w-lg rounded-t-2xl sm:rounded-2xl bg-white p-6 sm:p-8 shadow-xl max-h-[90vh] overflow-y-auto">
                <h3 className="text-xl font-bold text-dark mb-6">
                  {coupons.find((c) => c.id === editingCoupon.id)
                    ? "Edit Coupon"
                    : "Add New Coupon"}
                </h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Title
                    </label>
                    <input
                      type="text"
                      value={editingCoupon.title}
                      onChange={(e) =>
                        setEditingCoupon({
                          ...editingCoupon,
                          title: e.target.value,
                        })
                      }
                      className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                      placeholder="e.g. Summer Tire Sale"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Discount Display
                    </label>
                    <input
                      type="text"
                      value={editingCoupon.discount}
                      onChange={(e) =>
                        setEditingCoupon({
                          ...editingCoupon,
                          discount: e.target.value,
                        })
                      }
                      className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                      placeholder="e.g. $50 OFF or 20% OFF"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Description
                    </label>
                    <textarea
                      value={editingCoupon.description}
                      onChange={(e) =>
                        setEditingCoupon({
                          ...editingCoupon,
                          description: e.target.value,
                        })
                      }
                      rows={3}
                      className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 resize-none"
                      placeholder="What does this coupon cover?"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Coupon Code
                      </label>
                      <input
                        type="text"
                        value={editingCoupon.code}
                        onChange={(e) =>
                          setEditingCoupon({
                            ...editingCoupon,
                            code: e.target.value.toUpperCase(),
                          })
                        }
                        className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 font-mono"
                        placeholder="e.g. SAVE50"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Valid Until
                      </label>
                      <input
                        type="date"
                        value={editingCoupon.valid_until}
                        onChange={(e) =>
                          setEditingCoupon({
                            ...editingCoupon,
                            valid_until: e.target.value,
                          })
                        }
                        className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                      />
                    </div>
                  </div>
                </div>
                {saveError && (
                  <p className="mt-4 rounded-lg bg-red-50 px-4 py-3 text-sm text-red-600">
                    {saveError}
                  </p>
                )}
                <div className="mt-6 flex gap-3">
                  <button
                    onClick={handleSaveCoupon}
                    disabled={
                      saving ||
                      !editingCoupon.title ||
                      !editingCoupon.discount ||
                      !editingCoupon.code
                    }
                    className="flex-1 rounded-lg bg-primary px-4 py-2.5 text-sm font-bold text-white hover:bg-primary-dark disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {saving ? "Saving..." : "Save Coupon"}
                  </button>
                  <button
                    onClick={() => {
                      setEditingCoupon(null);
                      setSaveError(null);
                    }}
                    className="flex-1 rounded-lg border border-gray-300 px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Coupon Cards */}
          {loading ? (
            <div className="text-center py-16">
              <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent" />
              <p className="mt-4 text-gray-500">Loading coupons...</p>
            </div>
          ) : coupons.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-gray-500 text-lg">
                No active coupons right now. Check back soon for tire deals and
                auto service discounts in Hayward!
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {coupons.map((coupon) => (
                <article
                  key={coupon.id}
                  className="relative overflow-hidden rounded-2xl border-2 border-dashed border-primary/30 bg-linear-to-br from-white to-red-50 p-5 sm:p-8 transition-all hover:border-primary hover:shadow-lg"
                  itemScope
                  itemType="https://schema.org/Offer"
                >
                  <div className="absolute -left-3 top-1/2 h-6 w-6 -translate-y-1/2 rounded-full bg-white border-2 border-primary/30" />
                  <div className="absolute -right-3 top-1/2 h-6 w-6 -translate-y-1/2 rounded-full bg-white border-2 border-primary/30" />

                  <div className="text-center">
                    <div className="inline-block rounded-full bg-primary px-5 py-2 text-2xl font-black text-white" itemProp="price">
                      {coupon.discount}
                    </div>
                    <h3 className="mt-4 text-xl font-bold text-dark" itemProp="name">
                      {coupon.title}
                    </h3>
                    <p className="mt-2 text-sm text-gray-500" itemProp="description">
                      {coupon.description}
                    </p>
                    <div className="mt-4 inline-block rounded-lg bg-dark/5 px-4 py-2 font-mono text-sm font-bold text-dark">
                      Code: {coupon.code}
                    </div>
                    <p className="mt-3 text-xs text-gray-400">
                      Valid until{" "}
                      <time dateTime={coupon.valid_until} itemProp="validThrough">
                        {new Date(coupon.valid_until + "T00:00:00").toLocaleDateString("en-US", {
                          month: "long",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </time>
                    </p>

                    {isAdmin && (
                      <div className="mt-4 flex gap-2 justify-center">
                        <button
                          onClick={() => setEditingCoupon({ ...coupon })}
                          className="rounded-lg bg-dark px-4 py-2 text-xs font-medium text-white hover:bg-dark-light"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDeleteCoupon(coupon.id)}
                          className="rounded-lg bg-red-100 px-4 py-2 text-xs font-medium text-red-700 hover:bg-red-200"
                        >
                          Delete
                        </button>
                      </div>
                    )}
                  </div>
                </article>
              ))}
            </div>
          )}

          {/* Admin Add Button */}
          {isAdmin && coupons.length < 3 && (
            <div className="mt-8 text-center">
              <button
                onClick={handleAddNew}
                className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-bold text-dark transition-colors hover:bg-accent-light"
              >
                <svg
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4.5v15m7.5-7.5h-15"
                  />
                </svg>
                Add New Coupon ({coupons.length}/3)
              </button>
            </div>
          )}

          {/* Instructions */}
          <div className="mt-12 rounded-2xl bg-[#F9FAFB] p-8 text-center">
            <h3 className="text-lg font-bold text-dark">
              How to Redeem Your Tire Coupon
            </h3>
            <p className="mt-2 text-sm text-gray-500 max-w-lg mx-auto">
              Simply show this page on your phone or print the coupon when you
              visit Hayward Tire at 28534 Mission Blvd, Hayward, CA 94544.
              Mention the coupon code at checkout. Cannot be combined with other
              offers. Valid at our Hayward location only.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
