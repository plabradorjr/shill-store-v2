"use client";

export default function AddressForm() {
  return (
    <form>
      <h1 className="py-4 text-lg font-bold">Shipping information</h1>
      <div className="grid grid-cols-2">
        <input
          type="text"
          placeholder="First name"
          className="input input-bordered mr-1 mb-4"
        />
        <input
          type="text"
          placeholder="Last name"
          className="input input-bordered ml-1 mb-4"
        />
        <input
          type="text"
          placeholder="Country"
          className="input input-bordered mr-1 mb-4"
        />
      </div>
      <div className="grid grid-cols-1">
        <input
          type="text"
          placeholder="Address"
          className="input input-bordered mb-4"
        />
        <input
          type="text"
          placeholder="Apartment, suite, etc."
          className="input input-bordered mb-4"
        />
      </div>
      <div className="grid grid-cols-2">
        <input
          type="text"
          placeholder="City"
          className="input input-bordered mr-1 mb-4"
        />
        <input
          type="text"
          placeholder="State"
          className="input input-bordered ml-1 mb-4"
        />
        <input
          type="text"
          placeholder="ZIP / Postal code"
          className="input input-bordered mr-1 mb-4"
        />
      </div>
    </form>
  );
}
