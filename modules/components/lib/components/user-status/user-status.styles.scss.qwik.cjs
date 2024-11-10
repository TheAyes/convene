"use strict";
const styles = ".user-status {\n  display: flex;\n  gap: 0.5em;\n}\n.user-status > .avatar {\n  flex-grow: 0;\n  flex-shrink: 0;\n}\n.user-status > div {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-evenly;\n}\n.user-status > div > h4 {\n  font-size: 1em;\n  transition: filter 200ms ease-in-out;\n  color: var(--palette-text-primary, #9f9fff);\n}\n.user-status > div > p {\n  font-size: 0.75em;\n}";
module.exports = styles;
