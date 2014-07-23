this["JST"] = this["JST"] || {};

this["JST"]["clients/clientEntityRow.html"] = function(obj) {obj || (obj = {});var __t, __p = '', __e = _.escape;with (obj) {__p += '        <td>\n            ' +((__t = ( firstname )) == null ? '' : __t) +'\n        </td>\n        <td>\n            ' +((__t = ( lastname )) == null ? '' : __t) +'\n        </td>';}return __p};

this["JST"]["clients/clientsEntityList.html"] = function(obj) {obj || (obj = {});var __t, __p = '', __e = _.escape;with (obj) {__p += '<thead>        \n\t<tr>\n    \t<th>First Name</th>\n        <th>Last Name</th>\n    </tr>\n </thead>\n <tbody></tbody>';}return __p};

this["JST"]["clients/layout.html"] = function(obj) {obj || (obj = {});var __t, __p = '', __e = _.escape;with (obj) {__p += '<div class="js-clients"></div>';}return __p};

this["JST"]["layout/main.html"] = function(obj) {obj || (obj = {});var __t, __p = '', __e = _.escape;with (obj) {__p += '<div>\n\t<div class="menu"><ul class="js-menu nav nav-pills"></ul></div>\n\t<div class="content"> </div>\n</div>';}return __p};

this["JST"]["menus/menuOption.html"] = function(obj) {obj || (obj = {});var __t, __p = '', __e = _.escape;with (obj) {__p += ' <a href="#" class="js-menu-option">' +((__t = (menuName)) == null ? '' : __t) +'</a>\n';}return __p};