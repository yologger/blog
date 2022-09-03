(window.webpackJsonp=window.webpackJsonp||[]).push([[251],{1736:function(a,s,t){"use strict";t.r(s);var e=t(34),r=Object(e.a)({},(function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"table-of-contents"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#table-of-contents"}},[a._v("#")]),a._v(" Table of Contents")]),a._v(" "),t("p"),t("div",{staticClass:"table-of-contents"},[t("ul",[t("li",[t("a",{attrs:{href:"#인덱스-확인"}},[a._v("인덱스 확인")])]),t("li",[t("a",{attrs:{href:"#primary-key와-인덱스"}},[a._v("Primary Key와 인덱스")])]),t("li",[t("a",{attrs:{href:"#unique-key와-인덱스"}},[a._v("Unique Key와 인덱스")])]),t("li",[t("a",{attrs:{href:"#인덱스-추가하기"}},[a._v("인덱스 추가하기")])])])]),t("p"),a._v(" "),t("h1",{attrs:{id:"인덱스"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#인덱스"}},[a._v("#")]),a._v(" 인덱스")]),a._v(" "),t("p",[a._v("책 앞 쪽의 인덱스 페이지를 사용하여 원하는 페이지를 빠르게 찾을 수 있다. 이처럼 관계형 데이터베이스에도 "),t("code",[a._v("인덱스(Index)")]),a._v("라는 개념이 존재한다. 인덱스는 정렬되어있기 때문에 이진탐색으로 빠르게 데이터를 탐색할 수 있다.")]),a._v(" "),t("ul",[t("li",[a._v("인덱스는 반드시 유일할 필요는 없다.")]),a._v(" "),t("li",[a._v("인덱스는 정렬되어야 한다.")])]),a._v(" "),t("h2",{attrs:{id:"인덱스-확인"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#인덱스-확인"}},[a._v("#")]),a._v(" 인덱스 확인")]),a._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("SHOW")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("INDEX")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("FROM")]),a._v(" 테이블이름"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("SHOW")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("INDEX")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("FROM")]),a._v(" member"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),t("h2",{attrs:{id:"primary-key와-인덱스"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#primary-key와-인덱스"}},[a._v("#")]),a._v(" Primary Key와 인덱스")]),a._v(" "),t("p",[t("code",[a._v("Primary Key")]),a._v("를 지정하면 인덱스가 자동으로 생성된다.")]),a._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("CREATE")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("TABLE")]),a._v(" member "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("\n\tid "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("BIGINT")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("PRIMARY")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("KEY")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("AUTO_INCREMENT")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("NOT")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[a._v("NULL")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n    email "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("VARCHAR")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("255")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("UNIQUE")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("KEY")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("NOT")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[a._v("NULL")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n    name "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("VARCHAR")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("255")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("NOT")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[a._v("NULL")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),t("div",{staticClass:"language- extra-class"},[t("div",{staticClass:"highlight-lines"},[t("br"),t("br"),t("br"),t("br"),t("div",{staticClass:"highlighted"},[a._v(" ")]),t("br"),t("br"),t("br")]),t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("> SHOW INDEX FROM member;\n+--------+------------+----------+--------------+-------------+-----------+-------------+----------+--------+------+------------+---------+---------------+---------+------------+\n| Table  | Non_unique | Key_name | Seq_in_index | Column_name | Collation | Cardinality | Sub_part | Packed | Null | Index_type | Comment | Index_comment | Visible | Expression |\n+--------+------------+----------+--------------+-------------+-----------+-------------+----------+--------+------+------------+---------+---------------+---------+------------+\n| member |          0 | PRIMARY  |            1 | id          | A         |           0 |     NULL |   NULL |      | BTREE      |         |               | YES     | NULL       |\n| member |          0 | email    |            1 | email       | A         |           0 |     NULL |   NULL |      | BTREE      |         |               | YES     | NULL       |\n+--------+------------+----------+--------------+-------------+-----------+-------------+----------+--------+------+------------+---------+---------------+---------+------------+\n")])])]),t("h2",{attrs:{id:"unique-key와-인덱스"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#unique-key와-인덱스"}},[a._v("#")]),a._v(" Unique Key와 인덱스")]),a._v(" "),t("p",[t("code",[a._v("Unique Key")]),a._v("를 지정해도 인덱스가 자동으로 생성된다.")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("div",{staticClass:"highlight-lines"},[t("br"),t("br"),t("br"),t("br"),t("br"),t("div",{staticClass:"highlighted"},[a._v(" ")]),t("br"),t("br")]),t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("> SHOW INDEX FROM member;\n+--------+------------+----------+--------------+-------------+-----------+-------------+----------+--------+------+------------+---------+---------------+---------+------------+\n| Table  | Non_unique | Key_name | Seq_in_index | Column_name | Collation | Cardinality | Sub_part | Packed | Null | Index_type | Comment | Index_comment | Visible | Expression |\n+--------+------------+----------+--------------+-------------+-----------+-------------+----------+--------+------+------------+---------+---------------+---------+------------+\n| member |          0 | PRIMARY  |            1 | id          | A         |           0 |     NULL |   NULL |      | BTREE      |         |               | YES     | NULL       |\n| member |          0 | email    |            1 | email       | A         |           0 |     NULL |   NULL |      | BTREE      |         |               | YES     | NULL       |\n+--------+------------+----------+--------------+-------------+-----------+-------------+----------+--------+------+------------+---------+---------------+---------+------------+\n")])])]),t("h2",{attrs:{id:"인덱스-추가하기"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#인덱스-추가하기"}},[a._v("#")]),a._v(" 인덱스 추가하기")]),a._v(" "),t("p",[a._v("직접 인덱스를 추가할 수도 있다.")]),a._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("CREATE")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("INDEX")]),a._v(" idx_member_email_name "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("ON")]),a._v(" member "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("email"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" name"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])])])}),[],!1,null,null,null);s.default=r.exports}}]);