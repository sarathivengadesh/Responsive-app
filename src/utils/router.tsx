import React from "react"
import Home from "../Page/home.tsx"

export const router = [
    {path:"/", index:true, element:<Home/>},
    {path:"/chart", element:<div className="text-black m-auto font-bold">No Data</div>},
    {path:"/data", element:<div className="text-black m-auto font-bold">No Data</div>}
]