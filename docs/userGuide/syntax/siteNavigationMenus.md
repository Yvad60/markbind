## Site Navigation Menus

<div id="content">

**A _Site Navigation Menu_ (==_siteNav_ for short==) can be used to show a road map of the main pages of your site.**

Steps to add a siteNav:
1. Format your siteNav as an unordered Markdown list
2. Include it under a `<site-nav>` element.
3. (Optional) To make siteNav accessible on smaller screens, you can use the `<site-nav-button />` component in the [navbar]({{baseUrl}}/userGuide/components/navigation.html#navbars).

<div id="short">

<include src="codeAndOutput.md" boilerplate >
<variable name="code">
<site-nav>
* [**Getting Started**]({{baseUrl}}/userGuide/gettingStarted.html)
* **Authoring Contents** :expanded:
  * [Overview]({{baseUrl}}/userGuide/authoringContents.html)
  * [Adding Pages]({{baseUrl}}/userGuide/addingPages.html)
  * [MarkBind Syntax Overview]({{baseUrl}}/userGuide/markBindSyntaxOverview.html)
  * [Formatting Contents]({{baseUrl}}/userGuide/formattingContents.html)
  * [Using Components]({{baseUrl}}/userGuide/usingComponents.html)
</site-nav>
</variable>
</include>

</div>

MarkBind has styles nested lists with additional padding and smaller text sizes up to **4** nesting levels.
Beyond that, you'd have to include your own styles.

****Expanding menu items by default****

You can **append the `:expanded:` to a <tooltip content="a menu item with sub menu-items">parent menu item</tooltip> to make it expand by default.** In the example above, `* Authoring Contents :expanded:` makes the menu item `Authoring Contents` expand by default.

</div>

****Collapse/Expand All Buttons****

You can make expanding and collapsing dropdowns in the siteNav more accessible by using the [Collapse/Expand All Buttons]({{baseURl}}/userGuide/components/others.html#collapse-expand-all-buttons). These buttons are the `+` and `-` icons at the top right of the siteNav.

<div id="examples"></div>
