(this.webpackJsonpfsui=this.webpackJsonpfsui||[]).push([[36],{146:function(e,t,l){"use strict";l.r(t);var s=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",[l("fs-group",{attrs:{title:"基础用法"}},[l("fs-button",{on:{click:function(t){return e.toggle(1)}}},[e._v("选择")])],1),l("fs-group",{attrs:{title:"指定labelKey"}},[l("fs-button",{on:{click:function(t){return e.toggle(2)}}},[e._v("选择")])],1),l("fs-popup",{attrs:{position:"bottom"},model:{value:e.show,callback:function(t){e.show=t},expression:"show"}},[l("fs-popup-select",{attrs:{options:e.options},on:{selected:function(t){return e.selected(t,1)},cancel:function(t){e.show=!1}},model:{value:e.selectedValue,callback:function(t){e.selectedValue=t},expression:"selectedValue"}})],1),l("fs-popup",{attrs:{position:"bottom"},model:{value:e.showSecend,callback:function(t){e.showSecend=t},expression:"showSecend"}},[l("fs-popup-select",{attrs:{options:e.options,"label-key":"value",hideCancel:""},on:{selected:function(t){return e.selected(t,2)},cancel:function(t){e.showSecend=!1}},model:{value:e.selectedValue,callback:function(t){e.selectedValue=t},expression:"selectedValue"}})],1)],1)};s._withStripped=!0;var o={data:function(){return{show:!1,showSecend:!1,selectedValue:null,selectedValue2:null,options:[{value:"1",label:"选项一",disabled:!0},{value:"2",label:"选项二"},{value:"3",label:"选项三"}]}},methods:{selected:function(e,t){1===t?this.show=!1:this.showSecend=!1},toggle:function(e){1===e?this.show=!0:this.showSecend=!0}}},n=l(1),c=Object(n.a)(o,s,[],!1,null,null,null);c.options.__file="packages/popup-select/demo/index.vue";t.default=c.exports}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mc3VpLy4vcGFja2FnZXMvcG9wdXAtc2VsZWN0L2RlbW8vaW5kZXgudnVlP2RiOGMiLCJ3ZWJwYWNrOi8vZnN1aS9wYWNrYWdlcy9wb3B1cC1zZWxlY3QvZGVtby9pbmRleC52dWUiLCJ3ZWJwYWNrOi8vZnN1aS8uL3BhY2thZ2VzL3BvcHVwLXNlbGVjdC9kZW1vL2luZGV4LnZ1ZT9jYTYwIiwid2VicGFjazovL2ZzdWkvLi9wYWNrYWdlcy9wb3B1cC1zZWxlY3QvZGVtby9pbmRleC52dWUiXSwibmFtZXMiOlsicmVuZGVyIiwiX3ZtIiwidGhpcyIsIl9oIiwiJGNyZWF0ZUVsZW1lbnQiLCJfYyIsIl9zZWxmIiwiYXR0cnMiLCJ0aXRsZSIsIm9uIiwiY2xpY2siLCIkZXZlbnQiLCJ0b2dnbGUiLCJfdiIsInBvc2l0aW9uIiwibW9kZWwiLCJ2YWx1ZSIsInNob3ciLCJjYWxsYmFjayIsIiQkdiIsImV4cHJlc3Npb24iLCJvcHRpb25zIiwic2VsZWN0ZWQiLCJjYW5jZWwiLCJzZWxlY3RlZFZhbHVlIiwic2hvd1NlY2VuZCIsImxhYmVsLWtleSIsImhpZGVDYW5jZWwiLCJfd2l0aFN0cmlwcGVkIiwicG9wdXBfc2VsZWN0X2RlbW92dWVfdHlwZV9zY3JpcHRfbGFuZ19qc18iLCJkYXRhIiwic2VsZWN0ZWRWYWx1ZTIiLCJsYWJlbCIsImRpc2FibGVkIiwibWV0aG9kcyIsIml0ZW0iLCJpbmRleCIsImNvbXBvbmVudCIsIk9iamVjdCIsImNvbXBvbmVudE5vcm1hbGl6ZXIiLCJfX2ZpbGUiLCJfX3dlYnBhY2tfZXhwb3J0c19fIl0sIm1hcHBpbmdzIjoic0dBQUEsSUFBQUEsRUFBQSxXQUNBLElBQUFDLEVBQUFDLEtBQ0FDLEVBQUFGLEVBQUFHLGVBQ0FDLEVBQUFKLEVBQUFLLE1BQUFELElBQUFGLEVBQ0EsT0FBQUUsRUFDQSxNQUNBLENBQ0FBLEVBQ0EsV0FDQSxDQUFTRSxNQUFBLENBQVNDLE1BQUEsU0FDbEIsQ0FDQUgsRUFDQSxZQUNBLENBQ0FJLEdBQUEsQ0FDQUMsTUFBQSxTQUFBQyxHQUNBLE9BQUFWLEVBQUFXLE9BQUEsTUFJQSxDQUFBWCxFQUFBWSxHQUFBLFNBR0EsR0FFQVIsRUFDQSxXQUNBLENBQVNFLE1BQUEsQ0FBU0MsTUFBQSxlQUNsQixDQUNBSCxFQUNBLFlBQ0EsQ0FDQUksR0FBQSxDQUNBQyxNQUFBLFNBQUFDLEdBQ0EsT0FBQVYsRUFBQVcsT0FBQSxNQUlBLENBQUFYLEVBQUFZLEdBQUEsU0FHQSxHQUVBUixFQUNBLFdBQ0EsQ0FDQUUsTUFBQSxDQUFrQk8sU0FBQSxVQUNsQkMsTUFBQSxDQUNBQyxNQUFBZixFQUFBZ0IsS0FDQUMsU0FBQSxTQUFBQyxHQUNBbEIsRUFBQWdCLEtBQUFFLEdBRUFDLFdBQUEsU0FHQSxDQUNBZixFQUFBLG1CQUNBRSxNQUFBLENBQW9CYyxRQUFBcEIsRUFBQW9CLFNBQ3BCWixHQUFBLENBQ0FhLFNBQUEsU0FBQVgsR0FDQSxPQUFBVixFQUFBcUIsU0FBQVgsRUFBQSxJQUVBWSxPQUFBLFNBQUFaLEdBQ0FWLEVBQUFnQixNQUFBLElBR0FGLE1BQUEsQ0FDQUMsTUFBQWYsRUFBQXVCLGNBQ0FOLFNBQUEsU0FBQUMsR0FDQWxCLEVBQUF1QixjQUFBTCxHQUVBQyxXQUFBLG9CQUlBLEdBRUFmLEVBQ0EsV0FDQSxDQUNBRSxNQUFBLENBQWtCTyxTQUFBLFVBQ2xCQyxNQUFBLENBQ0FDLE1BQUFmLEVBQUF3QixXQUNBUCxTQUFBLFNBQUFDLEdBQ0FsQixFQUFBd0IsV0FBQU4sR0FFQUMsV0FBQSxlQUdBLENBQ0FmLEVBQUEsbUJBQ0FFLE1BQUEsQ0FDQWMsUUFBQXBCLEVBQUFvQixRQUNBSyxZQUFBLFFBQ0FDLFdBQUEsSUFFQWxCLEdBQUEsQ0FDQWEsU0FBQSxTQUFBWCxHQUNBLE9BQUFWLEVBQUFxQixTQUFBWCxFQUFBLElBRUFZLE9BQUEsU0FBQVosR0FDQVYsRUFBQXdCLFlBQUEsSUFHQVYsTUFBQSxDQUNBQyxNQUFBZixFQUFBdUIsY0FDQU4sU0FBQSxTQUFBQyxHQUNBbEIsRUFBQXVCLGNBQUFMLEdBRUFDLFdBQUEsb0JBSUEsSUFHQSxJQUlBcEIsRUFBQTRCLGVBQUEsRUN0R0EsSUNsQjJMQyxFRGtCM0wsQ0FDQUMsS0FEQSxXQUVBLE9BQ0FiLE1BQUEsRUFDQVEsWUFBQSxFQUNBRCxjQUFBLEtBQ0FPLGVBQUEsS0FDQVYsUUFBQSxDQUNBLENBQ0FMLE1BQUEsSUFDQWdCLE1BQUEsTUFDQUMsVUFBQSxHQUVBLENBQ0FqQixNQUFBLElBQ0FnQixNQUFBLE9BRUEsQ0FDQWhCLE1BQUEsSUFDQWdCLE1BQUEsVUFLQUUsUUFBQSxDQUNBWixTQURBLFNBQ0FhLEVBQUFDLEdBQ0EsSUFBQUEsRUFBQWxDLEtBQUFlLE1BQUEsRUFBQWYsS0FBQXVCLFlBQUEsR0FFQWIsT0FKQSxTQUlBd0IsR0FDQSxJQUFBQSxFQUFBbEMsS0FBQWUsTUFBQSxFQUFBZixLQUFBdUIsWUFBQSxZRXhDQVksRUFBZ0JDLE9BQUFDLEVBQUEsRUFBQUQsQ0FDZFQsRUFDQTdCLEVIOEdGLElHNUdBLEVBQ0EsS0FDQSxLQUNBLE1BdUJBcUMsRUFBQWhCLFFBQUFtQixPQUFBLHVDQUNlQyxFQUFBLFFBQUFKIiwiZmlsZSI6ImFzeW5jXzM2LmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIFtcbiAgICAgIF9jKFxuICAgICAgICBcImZzLWdyb3VwXCIsXG4gICAgICAgIHsgYXR0cnM6IHsgdGl0bGU6IFwi5Z+656GA55So5rOVXCIgfSB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImZzLWJ1dHRvblwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0udG9nZ2xlKDEpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW192bS5fdihcIumAieaLqVwiKV1cbiAgICAgICAgICApXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgICksXG4gICAgICBfYyhcbiAgICAgICAgXCJmcy1ncm91cFwiLFxuICAgICAgICB7IGF0dHJzOiB7IHRpdGxlOiBcIuaMh+WummxhYmVsS2V5XCIgfSB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImZzLWJ1dHRvblwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0udG9nZ2xlKDIpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW192bS5fdihcIumAieaLqVwiKV1cbiAgICAgICAgICApXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgICksXG4gICAgICBfYyhcbiAgICAgICAgXCJmcy1wb3B1cFwiLFxuICAgICAgICB7XG4gICAgICAgICAgYXR0cnM6IHsgcG9zaXRpb246IFwiYm90dG9tXCIgfSxcbiAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgdmFsdWU6IF92bS5zaG93LFxuICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICBfdm0uc2hvdyA9ICQkdlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGV4cHJlc3Npb246IFwic2hvd1wiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXCJmcy1wb3B1cC1zZWxlY3RcIiwge1xuICAgICAgICAgICAgYXR0cnM6IHsgb3B0aW9uczogX3ZtLm9wdGlvbnMgfSxcbiAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgIHNlbGVjdGVkOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnNlbGVjdGVkKCRldmVudCwgMSlcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgY2FuY2VsOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICBfdm0uc2hvdyA9IGZhbHNlXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnNlbGVjdGVkVmFsdWUsXG4gICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICBfdm0uc2VsZWN0ZWRWYWx1ZSA9ICQkdlxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInNlbGVjdGVkVmFsdWVcIlxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgICksXG4gICAgICBfYyhcbiAgICAgICAgXCJmcy1wb3B1cFwiLFxuICAgICAgICB7XG4gICAgICAgICAgYXR0cnM6IHsgcG9zaXRpb246IFwiYm90dG9tXCIgfSxcbiAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgdmFsdWU6IF92bS5zaG93U2VjZW5kLFxuICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICBfdm0uc2hvd1NlY2VuZCA9ICQkdlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGV4cHJlc3Npb246IFwic2hvd1NlY2VuZFwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXCJmcy1wb3B1cC1zZWxlY3RcIiwge1xuICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgb3B0aW9uczogX3ZtLm9wdGlvbnMsXG4gICAgICAgICAgICAgIFwibGFiZWwta2V5XCI6IFwidmFsdWVcIixcbiAgICAgICAgICAgICAgaGlkZUNhbmNlbDogXCJcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgIHNlbGVjdGVkOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnNlbGVjdGVkKCRldmVudCwgMilcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgY2FuY2VsOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICBfdm0uc2hvd1NlY2VuZCA9IGZhbHNlXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnNlbGVjdGVkVmFsdWUsXG4gICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICBfdm0uc2VsZWN0ZWRWYWx1ZSA9ICQkdlxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInNlbGVjdGVkVmFsdWVcIlxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgIClcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsIjx0ZW1wbGF0ZT5cbiAgPGRpdj5cbiAgICA8ZnMtZ3JvdXAgdGl0bGU9XCLln7rnoYDnlKjms5VcIj5cbiAgICAgIDxmcy1idXR0b24gQGNsaWNrPVwidG9nZ2xlKDEpXCI+6YCJ5oupPC9mcy1idXR0b24+XG4gICAgPC9mcy1ncm91cD5cbiAgICA8ZnMtZ3JvdXAgdGl0bGU9XCLmjIflrppsYWJlbEtleVwiPlxuICAgICAgPGZzLWJ1dHRvbiBAY2xpY2s9XCJ0b2dnbGUoMilcIj7pgInmi6k8L2ZzLWJ1dHRvbj5cbiAgICA8L2ZzLWdyb3VwPlxuICAgIDxmcy1wb3B1cCB2LW1vZGVsPVwic2hvd1wiIHBvc2l0aW9uPVwiYm90dG9tXCI+XG4gICAgICA8ZnMtcG9wdXAtc2VsZWN0IHYtbW9kZWw9XCJzZWxlY3RlZFZhbHVlXCIgOm9wdGlvbnM9XCJvcHRpb25zXCIgQHNlbGVjdGVkPVwic2VsZWN0ZWQoJGV2ZW50LCAxKVwiIEBjYW5jZWw9XCJzaG93PWZhbHNlXCI+PC9mcy1wb3B1cC1zZWxlY3Q+XG4gICAgPC9mcy1wb3B1cD5cbiAgICA8ZnMtcG9wdXAgdi1tb2RlbD1cInNob3dTZWNlbmRcIiBwb3NpdGlvbj1cImJvdHRvbVwiPlxuICAgICAgPGZzLXBvcHVwLXNlbGVjdCB2LW1vZGVsPVwic2VsZWN0ZWRWYWx1ZVwiIDpvcHRpb25zPVwib3B0aW9uc1wiIGxhYmVsLWtleT1cInZhbHVlXCIgQHNlbGVjdGVkPVwic2VsZWN0ZWQoJGV2ZW50LCAyKVwiIEBjYW5jZWw9XCJzaG93U2VjZW5kPWZhbHNlXCIgaGlkZUNhbmNlbD48L2ZzLXBvcHVwLXNlbGVjdD5cbiAgICA8L2ZzLXBvcHVwPlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5leHBvcnQgZGVmYXVsdCB7XG4gIGRhdGEgKCkge1xuICAgIHJldHVybiB7XG4gICAgICBzaG93OiBmYWxzZSxcbiAgICAgIHNob3dTZWNlbmQ6IGZhbHNlLFxuICAgICAgc2VsZWN0ZWRWYWx1ZTogbnVsbCxcbiAgICAgIHNlbGVjdGVkVmFsdWUyOiBudWxsLFxuICAgICAgb3B0aW9uczogW1xuICAgICAgICB7XG4gICAgICAgICAgdmFsdWU6ICcxJyxcbiAgICAgICAgICBsYWJlbDogJ+mAiemhueS4gCcsXG4gICAgICAgICAgZGlzYWJsZWQ6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHZhbHVlOiAnMicsXG4gICAgICAgICAgbGFiZWw6ICfpgInpobnkuownXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB2YWx1ZTogJzMnLFxuICAgICAgICAgIGxhYmVsOiAn6YCJ6aG55LiJJ1xuICAgICAgICB9XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBtZXRob2RzOiB7XG4gICAgc2VsZWN0ZWQgKGl0ZW0sIGluZGV4KSB7XG4gICAgICBpbmRleCA9PT0gMSA/IHRoaXMuc2hvdyA9IGZhbHNlIDogdGhpcy5zaG93U2VjZW5kID0gZmFsc2VcbiAgICB9LFxuICAgIHRvZ2dsZSAoaW5kZXgpIHtcbiAgICAgIGluZGV4ID09PSAxID8gdGhpcy5zaG93ID0gdHJ1ZSA6IHRoaXMuc2hvd1NlY2VuZCA9IHRydWVcbiAgICB9XG4gIH1cbn1cbjwvc2NyaXB0PlxuIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWQyZTFkOWI4JlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL2luZGV4LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvVXNlcnMvb25seXN0YXIv5bel5L2cL+e7hOS7tuW6ky9mcy11aS9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnZDJlMWQ5YjgnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnZDJlMWQ5YjgnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL2luZGV4LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1kMmUxZDliOCZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCdkMmUxZDliOCcsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicGFja2FnZXMvcG9wdXAtc2VsZWN0L2RlbW8vaW5kZXgudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==