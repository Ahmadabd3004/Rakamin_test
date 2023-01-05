import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useTransition, animated } from '@react-spring/web'

function Navigation() {
    const [showMenu, setShowMenu] = useState(false)
    const maskTransitions = useTransition(showMenu, {
        from: { position: "absolute", opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
    })

    const menuTransitions = useTransition(showMenu, {
        from: { opacity: 0, transform: "translateX(-100%)" },
        enter: { opacity: 1, transform: "translateX(0%)" },
        leave: { opacity: 0, transform: "translateX(-100%)" },
    })
    let menuMask;
    if (showMenu) {
        menuMask =
            <div
                className="bg-black opacity-50 fixed top-0 left-0 w-full h-full z-50"
                onClick={() => setShowMenu(false)}
            ></div>
    }
    return (
        <>
            <nav>
                <FontAwesomeIcon icon={faBars} onClick={() => setShowMenu(!showMenu)} />
                {
                    maskTransitions((style, item) => (
                        item &&
                        <animated.div style={style}>{menuMask}</animated.div>
                    ))
                }

                {
                    menuTransitions((style, item) => (
                        item &&
                        <animated.div style={style} className="fixed bg-white top-0 left-0 w-3/5 h-full z-50 shadow p-3">
                            <span className="font-bold">
                                Menu
                            </span>
                            <ul>
                                <li>HomePage</li>
                            </ul>
                        </animated.div>
                    ))
                }
                {/* {menuMask} */}
            </nav>
        </>
    )
}

export default Navigation;