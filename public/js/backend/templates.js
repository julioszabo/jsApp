this["JST"] = this["JST"] || {};

this["JST"]["clients/clientEntityRow.html"] = function(obj) {obj || (obj = {});var __t, __p = '', __e = _.escape;with (obj) {__p += '        <td>\r\n            ' +((__t = ( firstname )) == null ? '' : __t) +'\r\n        </td>\r\n        <td>\r\n            ' +((__t = ( lastname )) == null ? '' : __t) +'\r\n        </td>';}return __p};

this["JST"]["clients/clientsEntityList.html"] = function(obj) {obj || (obj = {});var __t, __p = '', __e = _.escape;with (obj) {__p += '<thead>        \r\n\t<tr>\r\n    \t<th>First Name</th>\r\n        <th>Last Name</th>\r\n    </tr>\r\n </thead>\r\n <tbody></tbody>';}return __p};

this["JST"]["layout/main.html"] = function(obj) {obj || (obj = {});var __t, __p = '', __e = _.escape;with (obj) {__p += '<div>\r\n\t<div class="menu"> </div>\r\n\t<div class="content"> </div>\r\n</div>';}return __p};

this["JST"]["menus/menu.html"] = function(obj) {obj || (obj = {});var __t, __p = '', __e = _.escape;with (obj) {__p += '<ul class="nav nav-pills">\r\n  <li class="active"><a href="#">Home</a></li>\r\n  <li><a href="#" class="js-menu-list-clients">Clientes</a></li>\r\n  <li><a href="#" class="js-menu-list-others">Other</a></li>\r\n</ul>';}return __p};