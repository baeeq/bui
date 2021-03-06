/**
 * @fileOverview 菜单命名空间入口文件
 * @ignore
 */

define('bui/menu',function (require) {
  
  var BUI = require('bui/common'),
    Menu = BUI.namespace('Menu');
  BUI.mix(Menu,{
    Menu : require('bui/menu/menu'),
    MenuItem : require('bui/menu/menuitem'),
    ContextMenu : require('bui/memu/contextmenu'),
    PopMenu : require('bui/menu/popmenu'),
    SideMenu : require('bui/menu/sidemenu')
  });

  Menu.ContextMenuItem = Menu.ContextMenu.Item;
  return Menu;
});