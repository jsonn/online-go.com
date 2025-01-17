/*
 * Copyright (C) 2012-2019  Online-Go.com
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

import * as React from "react";
import {LearningPage} from './LearningPage';
import {_, pgettext, interpolate} from "translate";
import {LearningHubSection} from './LearningHubSection';


export class Capture extends LearningHubSection {
    static pages():Array<typeof LearningPage> {
        return [
            Page1,
            Page2,
            Page3,
            Page4,
            Page5,
        ];
    }

    static section():string { return "capture"; }
    static title():string { return pgettext("Tutorial section on capturing", "Capture!"); }
    static subtext():string { return pgettext("Tutorial section on capturing", "Surrounding stones"); }
}

class Page1 extends LearningPage {
    constructor(props) { super(props); }
    text() {
        return _("A free space adjacent to a stone is called a liberty. A stone without liberties is captured. Capture the white stone");
    }
    config() {
        return {
            mode: "puzzle",
            initial_state: {
                'black': 'd5e6f5',
                'white': 'e5'
            },
            move_tree: this.makePuzzleMoveTree(
                [
                    "e4"
                ],
                [
                ]
            )
        };
    }
}
class Page2 extends LearningPage {
    constructor(props) {
        super(props);
    }

    text() {
        return _("Adjacent stones of the same color form a group and share liberties. They are captured together when they have no liberties anymore. Capture the group of white stones");
    }
    config() {
        return {
            mode: "puzzle",
            initial_state: {
                'black': 'd7c6c5e6d4e3f5',
                'white': 'd6d5e5e4'
            },
            move_tree: this.makePuzzleMoveTree(
                [
                    "f4"
                ],
                [
                ]
            )
        };
    }

}
class Page3 extends LearningPage {
    constructor(props) {
        super(props);
    }

    text() {
        return _("The border of the field does not count as liberty. Capture the white stones on the side.");
    }
    config() {
        return {
            mode: "puzzle",
            initial_state: {
                'black': 'a7b6a3b4',
                'white': 'a6a5a4b5'
            },
            move_tree: this.makePuzzleMoveTree(
                [
                    "c5"
                ],
                [
                ]
            )
        };
    }

}
class Page4 extends LearningPage {
    constructor(props) {
        super(props);
    }

    text() {
        return _("Surrounding is not enough, you have to fill all the space around the stones. Capture the white stones. Notice that you can take even if the newly placed stone has no liberties, because the white stones are taken first.");
    }
    config() {
        return {
            mode: "puzzle",
            initial_state: {
                'black': 'c6c5c4g6g5g4d7e7f7d3e3f3',
                'white': 'd6d5d4f6f5f4e6e4'
            },
            move_tree: this.makePuzzleMoveTree(
                [
                    "e5"
                ],
                [
                ]
            )
        };
    }

}

class Page5 extends LearningPage {
    constructor(props) {
        super(props);
    }

    text() {
        return _("A group of liberties surrounded by stones of the same color is called an eye. A group with two eyes is alive. Capture the white stones before white can form two eyes");
    }
    config() {
        return {
            mode: "puzzle",
            initial_state: {
                'black': 'a4b4c4d1d2d3',
                'white': 'a2a3b3b1c1'
            },
            move_tree: this.makePuzzleMoveTree(
                [
                    "c2b2c3d4a1"
                ],
                [
                    "c3c2",
                    "b2c2",
                    "d4c2",
                ]
            )
        };
    }

}
