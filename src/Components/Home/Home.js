import React, { Component } from 'react';
import Carousal  from '../Carousal/Carousal';
import Helper from '../../Shared/Helper.js';

export default class Home extends Component {
    render() {
       
      return (
        <>
           
            {Helper.navItems ?
                Helper.navItems.map((item, index) => {
                  return (
                    <>
                      <Carousal key={'carousal-'+index+1} product={item} productIndex={index}>
                      </Carousal>
                    </>
                  )
                })
                : null

            }
        </>
    )
    }
}
