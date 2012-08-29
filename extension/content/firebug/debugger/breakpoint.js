/* See license.txt for terms of usage */

define([
    "firebug/lib/trace",
    "firebug/firebug",
],
function(FBTrace, Firebug) {

// ********************************************************************************************* //

function Breakpoint(name, href, lineNumber, checked, sourceLine, isFuture)
{
    this.name = name;
    this.href = href;
    this.lineNumber = lineNumber;
    this.checked = checked;
    this.sourceLine = sourceLine;
    this.isFuture = isFuture;
}

// ********************************************************************************************* //
// Registration

return Breakpoint;

// ********************************************************************************************* //
});