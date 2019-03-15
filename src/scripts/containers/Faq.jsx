//import npm package
import React from 'react';
import {Collapsible, CollapsibleItem} from 'react-materialize';
//import components and containers

//import assets


export default class Faq extends React.Component {
    render(){
        return(
            <div id="faq">
            <h2>FAQ</h2>
                <Collapsible accordion defaultActiveKey={1}>
                    <CollapsibleItem header='First question' icon='add'>
                        Lorem ipsum dolor sit amet.
                    </CollapsibleItem>
                    <CollapsibleItem header='Second question' icon='add'>
                        Lorem ipsum dolor sit amet.
                    </CollapsibleItem>
                    <CollapsibleItem header='Third question' icon='add'>
                        Lorem ipsum dolor sit amet.
                    </CollapsibleItem>
                </Collapsible>
            </div>
        );
    }
}
