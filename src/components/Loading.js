import React from 'react';
import { PKnife } from '../assets/assetsImport';


export default function Loading() {
    return (
        <div class='homeAll'>
            <div class='homeCont'>
                {/* <style>{'body { background-color:  #0000FF; }'}</style> */}
                <img src={ PKnife } className='knife' alt="I'm handy like a pocket knife" />
            </div>
        </div>
    )
}
