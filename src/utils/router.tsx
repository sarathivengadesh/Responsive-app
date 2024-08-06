import React from "react"
import Home from "../Page/home.tsx"

export const router = [
    {path:"/", index:true, element:<Home/>},
    {path:"/chart", element:<h1>hellow 2</h1>},
    {path:"/data", element:<h1>hellow 3</h1>}
]