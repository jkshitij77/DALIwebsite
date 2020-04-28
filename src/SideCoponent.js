import React, {Component} from 'react';

class SideComponent extends Component{
    constructor(props) {
        super(props);
        this.state = {};
    }

    render(){
        return(
            <div>
                <div class={this.props.divclass}> 
                    <div class="flip-box-inner">
                        <div class="flip-box-front">
                            <img src={this.props.url} class={this.props.imageclass} />
                        </div>
                        <div class="flip-box-back">
                            <h2>aloo</h2>
                            <p>hello</p>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default SideComponent;