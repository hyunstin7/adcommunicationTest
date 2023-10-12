$(window).on("load",function(){
    let windowinnerWidth = $(window).innerWidth();
    let windowinnerHeight = $(window).innerHeight();
    const scrollEl= $('.scroll')
    const scrollimgWidth= $('.scroll img').eq(0).innerWidth();
    const scrollimgHeight= $('.scroll img').eq(0).innerHeight();
    const sec1Box1 = $('.sec1-box1')
    const sec1Box2 = $('.sec1-box2')
    const sec1Box3 = $('.sec1-box3')
    const header = $('header')
    let Lastscroll = 0;
    scrollEl.css("width",`${scrollimgWidth}px`)
    scrollEl.css("height",`${scrollimgHeight}px`)
    
//    if(windowinnerWidth <= 768) {
//     if (navigator.userAgent.indexOf('KAKAO') >= 0){
//         document.documentElement.style.setProperty("--vh",`${windowinnerHeight*0.01+1.03}px`)
//     }else{
//         document.documentElement.style.setProperty("--vh",`${windowinnerHeight*0.01}px`)
//     }
//    }
    


    $(window).scroll(function(){
        let scrollY = $(window).scrollTop();
        
        // if(scrollY > Lastscroll){
        //     // header.css("transform","translateY(-110%)")
        //     $(window).resize(()=>{
        //     $('.sec1-sticky').css("top",0)
        //     })
        // }else{
        //     // header.css("transform","translateY(0)")
        //     $(window).resize(()=>{
        //         $('.sec1-sticky').css("top","-51.5px")
        //     })
        // }
        Lastscroll = scrollY;
        const sec1 = $('#sec1');
        const sec1Box = $('sec1-box');
        let sec1Ratio = scrollY / (sec1.innerHeight() - windowinnerHeight)
        sec1Ratio < 0 ? sec1Ratio = 0 : sec1Ratio > 1.1 ? sec1Ratio = 1.1 : sec1Ratio = sec1Ratio;
        

        if(sec1Ratio >= 0){
            let sec1tranSlate = sec1Ratio * 500;
            sec1tranSlate < 0 ? sec1tranSlate = 0 : sec1tranSlate > 100 ? sec1tranSlate = 100 : sec1tranSlate = sec1tranSlate;
            
            let sec1Opacitiy = sec1Ratio * 5;
            sec1Opacitiy < 0 ? sec1Opacitiy = 0 : sec1Opacitiy > 1 ? sec1Opacitiy = 1 : sec1Opacitiy = sec1Opacitiy;
            sec1Box1.css("transform",`translate3d(-50%,calc(-50% - ${sec1tranSlate}px),0)`)
            sec1Box1.css("opacity",1 - sec1Opacitiy)
            
        }
        if(sec1Ratio >= 0.2){
            let sec1tranSlate = (sec1Ratio - 0.3) * 500;
            let sec1Opacitiy = (sec1Ratio - 0.3) * 5;
            sec1tranSlate < 0 ? sec1tranSlate = 0 : sec1tranSlate > 100 ? sec1tranSlate = 100 : sec1tranSlate = sec1tranSlate;
            sec1Opacitiy < 0 ? sec1Opacitiy = 0 : sec1Opacitiy > 1 ? sec1Opacitiy = 1 : sec1Opacitiy = sec1Opacitiy;
            sec1Box2.css("transform",`translate3d(-50%,calc(-50% + 100px - ${sec1tranSlate}px),0)`)
            sec1Box2.css("opacity",sec1Opacitiy)
        } 
        if(sec1Ratio >= 0.4 && sec1Ratio < 0.5) {
            sec1Box2.css("transform",`translate3d(-50%,calc(-50%),0)`)
            sec1Box2.css("opacity",1)
        }
        if(sec1Ratio >= 0.5){
            let sec1tranSlate = (sec1Ratio - 0.6) * 500;
            let sec1Opacitiy = (sec1Ratio - 0.6) * 5;
            sec1tranSlate < 0 ? sec1tranSlate = 0 : sec1tranSlate > 100 ? sec1tranSlate = 100 : sec1tranSlate = sec1tranSlate;
            sec1Opacitiy < 0 ? sec1Opacitiy = 0 : sec1Opacitiy > 1 ? sec1Opacitiy = 1 : sec1Opacitiy = sec1Opacitiy;
            sec1Box2.css("transform",`translate3d(-50%,calc(-50% - ${sec1tranSlate}px),0)`)
            sec1Box2.css("opacity",1 - sec1Opacitiy)
        }
       
        if(sec1Ratio >= 0.7){
            let sec1tranSlate = (sec1Ratio - 0.8) * 500;
            let sec1Opacitiy = (sec1Ratio - 0.8) * 5;
            sec1tranSlate < 0 ? sec1tranSlate = 0 : sec1tranSlate > 100 ? sec1tranSlate = 100 : sec1tranSlate = sec1tranSlate;
            sec1Opacitiy < 0 ? sec1Opacitiy = 0 : sec1Opacitiy > 1 ? sec1Opacitiy = 1 : sec1Opacitiy = sec1Opacitiy;
            sec1Box3.css("transform",`translate3d(-50%,calc(-50% + 100px - ${sec1tranSlate}px),0)`)
            sec1Box3.css("opacity",sec1Opacitiy)
        } 


        const sec2Wrap = $('.sec2-wrap');
        const sec2Path = $('.sec2-path');
        const sec2PathLength = sec2Path.get(0).getTotalLength()

        let sec2WrapRatio = (scrollY - sec2Wrap.offset().top + windowinnerHeight * 0.7) / (sec2Wrap.innerHeight() + windowinnerHeight*0.4)

        sec2WrapRatio < 0 ? sec2WrapRatio = 0 : sec2WrapRatio > 1.2 ? sec2WrapRatio = 1.2 : sec2WrapRatio = sec2WrapRatio

        sec2Path.css("stroke-dasharray",sec2PathLength)
        sec2Path.css("stroke-dashoffset",sec2PathLength - sec2PathLength*sec2WrapRatio)

        //==================================// 
        //========== Section : 02 ==========// 
        //==================================// 

        function TopToBottom(a){
            if($(a).offset().top < scrollY + windowinnerHeight*0.8){
                $(a).css("transition",".5s")
                $(a).css("transform","translateY(0)")
                $(a).css("opacity",1)
            }else if($(a).offset().top - windowinnerHeight*1.4 > scrollY){
                $(a).css("transition","none")
                $(a).css("transform","translateY(-100px)")
                $(a).css("opacity",0)
            }
        }

        function BottomToTop(a){
            if($(a).offset().top < scrollY + windowinnerHeight*0.8){
                $(a).css("transition",".5s")
                $(a).css("transform","translateY(0)")
                $(a).css("opacity",1)
            }else if($(a).offset().top - windowinnerHeight*1.4 > scrollY){
                $(a).css("transition","none")
                $(a).css("transform","translateY(100px)")
                $(a).css("opacity",0)
            }
        }

        function LeftToRight(a){
            if($(a).offset().top < scrollY + windowinnerHeight*0.8){
                $(a).css("transition",".5s")
                $(a).css("transform","translateX(0)")
                $(a).css("opacity",1)
            }else if($(a).offset().top - windowinnerHeight*1.4 > scrollY){
                $(a).css("transition","none")
                $(a).css("transform","translateX(-100px)")
                $(a).css("opacity",0)
            }
        }

        function RightToLeft(a){
            if($(a).offset().top < scrollY + windowinnerHeight*0.8){
                $(a).css("transition",".5s")
                $(a).css("transform","translateX(0)")
                $(a).css("opacity",1)
            }else if($(a).offset().top - windowinnerHeight*1.4 > scrollY){
                $(a).css("transition","none")
                $(a).css("transform","translateX(100px)")
                $(a).css("opacity",0)
            }
        }
        function RightBottomToLeftTop(a){
            if($(a).offset().top < scrollY + windowinnerHeight*0.8){
                $(a).css("transition",".5s")
                $(a).css("transform","translate(0)")
                $(a).css("opacity",1)
            }else if($(a).offset().top - windowinnerHeight*1.4 > scrollY){
                $(a).css("transition","none")
                $(a).css("transform","translate(100px,100px)")
                $(a).css("opacity",0)
            }
        }

        function LeftBottomToRightTop(a){
            if($(a).offset().top < scrollY + windowinnerHeight*0.8){
                $(a).css("transition",".5s")
                $(a).css("transform","translate(0)")
                $(a).css("opacity",1)
            }else if($(a).offset().top - windowinnerHeight*1.4 > scrollY){
                $(a).css("transition","none")
                $(a).css("transform","translate(-100px,100px)")
                $(a).css("opacity",0)
            }
        }

        function SclaeIncrese(a){
            if($(a).offset().top < scrollY + windowinnerHeight*1){
                $(a).css("transition",".5s cubic-bezier(0.075, 0.82, 0.165, 1)")
                $(a).css("transform","scale(1)")
            }else if($(a).offset().top - windowinnerHeight*1.4 > scrollY){
                $(a).css("transition","none")
                $(a).css("transform","scale(0)")
            }
        }

        function ClassToggle(a){
            if($(a).offset().top < scrollY + windowinnerHeight*0.8){
                $(a).css("transition",".5s")
                $(a).addClass(`${$(a).attr("class-name")}`)
            }else if($(a).offset().top - windowinnerHeight*1.4 > scrollY){
                $(a).css("transition","none")
                $(a).removeClass(`${$(a).attr("class-name")}`)
            }
        }

        function ParentsClassToggle(a){
            if($(a).parent().offset().top < scrollY + windowinnerHeight*0.8){
                $(a).css("transition",".5s")
                $(a).addClass(`${$(a).attr("class-name")}`)
            }else if($(a).parent().offset().top - windowinnerHeight*1.4 > scrollY){
                $(a).css("transition","none")
                $(a).removeClass(`${$(a).attr("class-name")}`)
            }
        }

        BottomToTop(".sec2-box1");
        BottomToTop(".sec8-wrap h2");
        BottomToTop(".sec9-wrap1 h2");
        BottomToTop(".sec9-wrap2 h2");
        BottomToTop(".sec9-wrap2 p");
        RightToLeft(".sec2-box2");
        RightToLeft(".sec5-box1 h2");
        RightToLeft(".sec7-box1 h2:nth-child(2)");
        LeftBottomToRightTop(".roket")
        LeftToRight(".sec2-box3");
        LeftToRight(".sec4-box1 h2");
        LeftToRight(".sec9-wrap2-box img:first-child");
        LeftToRight(".sec10-wrap h2 span");
        RightBottomToLeftTop(".sec2-box4");
        LeftToRight(".sec2-box5");
        SclaeIncrese(".sec2-box6");
        SclaeIncrese(".sec5-box2 img")
        SclaeIncrese(".sec7-box2 img")
        TopToBottom(".sec6-box1 h2")
        TopToBottom(".sec6-box2 .sec6-innerbox1 ul")
        TopToBottom(".sec6-box2 .sec6-innerbox2 ul")
        TopToBottom(".sec6-box2 .sec6-innerbox3 ul")
        ClassToggle(".sec3-wrap h3 span:first-child")
        ClassToggle(".sec3-wrap h3 span:last-child")
        ClassToggle(".sec4-box2 img:nth-child(1)")
        ClassToggle(".sec4-box2 img:nth-child(2)")
        ClassToggle(".sec4-box2 img:nth-child(3)")
        ClassToggle(".sec4-box2 img:nth-child(4)")
        ParentsClassToggle(".sec9-list-box1")
        ParentsClassToggle(".sec9-list-box2")
        ParentsClassToggle(".sec9-list-box3")
        ParentsClassToggle(".sec9-list-box4")
        ParentsClassToggle(".sec9-list-box5")
        ClassToggle(".sec9-wrap2-box img:last-child");
        ClassToggle(".sec10-wrap-box img:nth-child(1)");
        ClassToggle(".sec10-wrap-box img:nth-child(2)");
        ClassToggle(".sec10-wrap-box img:nth-child(3)");
        ClassToggle(".sec10-wrap-box img:nth-child(4)");
        ParentsClassToggle(".sec12-wrap h2 span:nth-child(1)")
        ParentsClassToggle(".sec12-wrap h2 span:nth-child(2)")
        ParentsClassToggle(".sec12-wrap h2 span:nth-child(3)")
        ParentsClassToggle(".sec12-wrap h2 span:nth-child(5)")


    // $('.console').html(`sec2레시오는${classname}`)
        
    })


})