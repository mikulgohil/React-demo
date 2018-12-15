
import React from 'react'
import Helmet from 'react-helmet'

const ScriptFooter = (props) => (
    <Helmet>
            
        <script>
            {`
                $(window).on("scroll",function () {

                    var bodyScroll = $(window).scrollTop(),
                        navbar = $(".navbar");
              
                    if(bodyScroll > 130){
                        navbar.addClass("nav-scroll");
                    }else{
                        navbar.removeClass("nav-scroll");
                    }
              
                });
              
                $(window).on("load",function (){
              
              
              
              var bodyScroll = $(window).scrollTop(),
              navbar = $(".navbar");
              
              if(bodyScroll > 130){
              
                    navbar.addClass("nav-scroll");
              
              }else{
              
                    navbar.removeClass("nav-scroll");
              
              }

              });
              
                
            `}
        </script>
    </Helmet>
)


export default ScriptFooter
