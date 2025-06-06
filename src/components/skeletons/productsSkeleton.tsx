export default function ProductsSkeleton ({index}: {index : number}){
    return(
        <main className="w-full grid grid-cols-6 h-full reveal animate-pulse">
        <div /* quiero que cuando index sea 1 este este primero */
          className={`col-span-full order-last md:col-span-3 p-4 content-center md:${index % 2 == 0 ? "order-first" : "order-last"} `}
     
        >
          <div className="flex-1">
            <h4 className="text-white text-3xl inline-block w-12">
              
            </h4>
          </div>
          <div className="flex-2 justify-end">
            <h4
              className="text-white text-lg inline-block w-6" 
              style={{ color: "#FF00FF" }}
            >
            </h4>
          </div>

          <p className="text-gray-300 py-2 w-10 h-16"></p>
          <button
            className="rounded-xl px-4 py-2 pt-1 text-1xl buttons mx-1 mb-8 w-10 h-3"
           
          >
          </button>
        </div>
        <div
          className={`col-span-full md:col-span-3 p-4 order-first md:${index % 2 == 0 ? "order-last" : "order-first"}h-55 rounded-xl`}
        >
        </div>
      </main>
    )

}