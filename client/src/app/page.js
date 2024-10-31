"use client"
import ConfigModal from "./components/modals/ConfigModal";
import PricerModal from "./components/modals/PricerModal";

export default function BMO() {
  return (
    <div className="">
        <PricerModal.Modal />
        <ConfigModal.Modal />
    </div>
  );
}
