var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// making a array of Contries and Print its original array
var contriestoVisit = ["Canada", "Denmark", "Bangladesh", "Afghanistan"];
console.log("Original Order:", contriestoVisit);
// Print the Array in Alphabetical oreder without medifying the actual araay list
console.log("Alphabetical Order:", __spreadArray([], contriestoVisit, true).sort());
// Show that the array is still  in its Original Order
console.log("still in  Original Order:", contriestoVisit);
// Print the Array in Reversed order Without modefying the actuall list 
console.log("Reverse Order:", __spreadArray([], contriestoVisit, true).reverse());
// Show that the array is still  in its Original Order
console.log("still in  Original Order:", contriestoVisit);
// We Have changed the original Array Order Now
console.log("Original Array Reversed:", contriestoVisit.reverse());
// Print the array to show that its back to its original order
console.log("Back to Original Order:", contriestoVisit.reverse());
// Print the array to show that its order has been Changed in Alphabetical Order now
console.log("Sorted in alphabetical Order:", contriestoVisit.sort());
// We Have changed the original Array Order Now in reversed order again
console.log("Original Array Reversed:", contriestoVisit.reverse());
