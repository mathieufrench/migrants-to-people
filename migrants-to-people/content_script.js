walk(document.body);

function walk(node)
{
	// I stole this function from here:
	// http://is.gd/mwZp7E

	var child, next;

	switch ( node.nodeType )
	{
		case 1:  // Element
		case 9:  // Document
		case 11: // Document fragment
			child = node.firstChild;
			while ( child )
			{
				next = child.nextSibling;
				walk(child);
				child = next;
			}
			break;

		case 3: // Text node
			handleText(node);
			break;
	}
}

function handleText(textNode)
{
	var v = textNode.nodeValue;

	v = v.replace(/\bMigrant\b/g, "Person");
	v = v.replace(/\bmigrant\b/g, "person");
	v = v.replace(/\bMigrants\b/g, "People");
	v = v.replace(/\bmigrants\b/g, "people");

	v = v.replace(/\bImmigrant\b/g, "Person");
	v = v.replace(/\bimmigrant\b/g, "person");
	v = v.replace(/\bImigrants\b/g, "People");
	v = v.replace(/\bimmigrants\b/g, "people");


	textNode.nodeValue = v;
}


