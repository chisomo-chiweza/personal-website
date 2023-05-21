/** Toggle Accessibility Drop Down Menu */
const accessibilityControls = document.querySelector("#accessibility-controls"); // Get accessibilityControls button
const accessibilityOptions = document.querySelector("#accessibility-options"); // Get accessibilityOptions drop-down menu
let isExpanded = accessibilityControls.getAttribute("aria-expanded"); // The drop-down menu will be toggled based on the boolean state of this attribute
/**
 * @name dropDownAccessibilityMenu
 * @description Drops down the Accessibility options menu
 */
function dropDownAccessibilityMenu() {
  accessibilityOptions.style.display = isExpanded ? "block" : "none"; // change display based on attribute
  isExpanded = !isExpanded; // Set state back to false
}

