"use client"
import BranchContext from "@/contexts/branch";
import { setStorageData } from "@/lib/adapters/localStorage";
import { useQueryClient } from "@tanstack/react-query";
import { useState, useEffect, useContext } from "react";

const MODAL_ID = 'config_modal';

function open() {
    return document.getElementById(MODAL_ID).showModal();
}

function close() {
    return document.getElementById(MODAL_ID).close();
}

function Modal() {
    const queryClient = useQueryClient();
    const [ host, setHost ] = useState("")
    const session = useContext(BranchContext)

    useEffect(() => {
        if(!session.data || !session.data.host) {
            open()
        } else {
            close()
        }
    }, [session.isLoading])

    return (
        <dialog id={MODAL_ID} className="modal modal-bottom sm:modal-middle">
            <div className="modal-box w-full">
                <h3 className="font-bold text-lg pb-6">Configure o BMO</h3>
                <form
                    id="config_modal_form"
                    className="w-full flex flex-col align-center justify-center gap-3"
                    onSubmit={e => {
                        e.preventDefault();
                        setStorageData({ host })
                        queryClient.invalidateQueries("session")
                        close()
                    }}
                >
                    <input
                        type="text"
                        placeholder="Host PG da filial"
                        className="input input-bordered w-full"
                        value={host}
                        onChange={e => setHost(e.target.value)}
                    />
                </form>
                <div className="modal-action">
                    <input
                        type="submit"
                        form="config_modal_form"
                        className="btn btn-success"
                        value={session.isLoading ? "Salvando..." : "Salvar"}
                        disabled={session.data || session.data?.host}
                    />
                </div>
            </div>
        </dialog>
    )
}

const ConfigModal = {
    open,
    close,
    Modal
}

export default ConfigModal;