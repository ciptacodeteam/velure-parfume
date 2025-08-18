"use client"

export default function TopSection() {
  // const [visible, setVisible] = useState(true)

  // if (!visible) return null

  return (
    <div className="flex items-center gap-x-6 bg-[#214a55] px-6 py-1.5 sm:px-3.5 sm:before:flex-1">
      <p className="text-sm/6 text-white font-[family-name:var(--inter)]">
        Enjoy up to 30% OFF – Discover Your Signature Scent with Velure Today &nbsp;<span aria-hidden="true">&rarr;</span>
      </p>
      <div className="flex flex-1 justify-end">
        <button
          type="button"
          className="-m-3 p-3 focus-visible:outline-offset-[-4px]"
          // onClick={() => setVisible(false)}
        >
          <span className="sr-only">Dismiss</span>
          {/* <XMarkIcon aria-hidden="true" className="size-5 text-white" /> */}
        </button>
      </div>
    </div>
  )
}
