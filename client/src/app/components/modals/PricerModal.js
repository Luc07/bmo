"use client"
import BranchContext from "@/contexts/branch";
import { getProductByBarCode } from "@/lib/api/services/pricer";
import { useMutation } from "@tanstack/react-query";
import { useEffect, useState, useContext , useRef } from "react";
import Image from "next/image";

const MODAL_ID = 'pricer_modal';

function isKeyPressEventAlphaNumeric(event) {
    const keyCode = event.keyCode
    if(
        (keyCode <= 90 && keyCode >= 65) ||
        (keyCode >= 48 && keyCode <=57)
    ) return true
    return false
}

function formatBarCode(code) {
    let newBarCode = code;
    while(newBarCode.length < 13) {
        newBarCode = "0"+newBarCode
    }
    return newBarCode;
}

function formatCurrency(num) {
    return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: "BRL" }).format(num)
}

function open() {
    return document.getElementById(MODAL_ID).showModal()
}

function close() {
    return document.getElementById(MODAL_ID).close();
}

function Modal() {
    const inputRef = useRef(null)
    const timeoutRef = useRef(null)
    const session = useContext(BranchContext)
    const [ barCode, setBarCode ] = useState("")
    const [ product, setProduct ] = useState({
        barCode: "",
        description: "",
        price: 0
    })

    const productMutation = useMutation({
        mutationFn: ({ barCode, host }) => getProductByBarCode({ barCode, host }),
        onSuccess: (data) => {
            setBarCode("");
            if(data) {
                setProduct(data)
            } else {
                setProduct({
                    barCode: "xxxxxxxxxxxxx",
                    description: "Produto não encontrado",
                    price: 0
                })
            }
        }
    })

    useEffect(() => {
        function onAlphaNumericHandler(event) {
            if(
                !(inputRef.current === document.activeElement)&&
                isKeyPressEventAlphaNumeric(event)
            ) {
                inputRef.current.focus()
            }
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
            timeoutRef.current = setTimeout(() => {
                close()
            }, 5000)
        }
        window.addEventListener("keydown", onAlphaNumericHandler)
        return () => { window.removeEventListener("keydown", onAlphaNumericHandler) }
    }, [])
    
    return (
        <dialog id={MODAL_ID} className="modal modal-bottom sm:modal-middle scale-150">
            <div className="modal-box flex justify-between items-center overflow-hidden p-5 modal_shadow relative border-4 border-[#c4511f]">
                <section>
                    <h3 className="text-lg">{`${product.barCode}`}</h3>
                    <h4 className="py-4 text-xl font-bold">{product.description}</h4>
                    <h4 className="p-0 pt-4 pb-2 text-6xl font-bold text-[#901235]">{formatCurrency(product.price.toFixed(2))}</h4>
                </section>

                <section className="flex flex-col items-end justify-end absolute bottom-5 right-5">
                    <Image
                        className=""
                        alt="Redepharma logomarca padrao"
                        src="/logo.png"
                        width={150}
                        height={150}
                    />
                </section>
                <form
                    onSubmit={e => {
                        e.preventDefault()
                        productMutation.mutate({ host: session.data.host, barCode: formatBarCode(barCode) });
                        setBarCode("")
                        open();
                    }}
                >
                    <input
                        type="text700083456311
                        "
                        className="opacity-0 w-0 h-0"
                        ref={inputRef}
                        value={barCode}
                        onChange={e => {
                            setBarCode(e.target.value)
                        }}
                    />
                </form>
            </div>
        </dialog>
    )
}

const PricerModal = {
    open,
    close,
    Modal
}

export default PricerModal;