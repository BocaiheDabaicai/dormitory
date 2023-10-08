import {defineStore} from "pinia";

// 导入图片
import Dormitory from "@/assets/house/dormitory.png";
import Hotel from "@/assets/house/hotel.png";
export const useHouseStore = defineStore("HouseStore", {
    state: () => ({
        area: "",   // 显示提示栏右侧的信息
        showFloor: true,  // 显示楼层卡片的状态
        lampArray:[     // 统计灯的展示数据
            {
                type:'success',
                value:120,
                content:'空余的房间数量'
            },
            {
                type:'warning',
                value:55,
                content:'被占用的房间数量'
            },
            {
                type:'danger',
                value:20,
                content:'住满的房间数量'
            }
        ],
        cardArray: [    // 公寓卡片
            {
                name: "员工宿舍",
                count: 107,
                src: Dormitory,
                info: "dormitory",
            },
            {
                name: "招待所",
                count: 67,
                src: Hotel,
                info: "hotel",
            }
        ],
        floorArray:[    // 楼层卡片
            {
                number:1,
                current:0,
                max:45
            },
            {
                number:2,
                current:15,
                max:41
            },
            {
                number:3,
                current:22,
                max:50
            },
            {
                number:4,
                current:26,
                max:52
            },
            {
                number:5,
                current:45,
                max:45
            }
        ],
        roomArray:[    // 房间卡片
            {
                number:'A201',
                current:3,
                max:4
            },
            {
                number:'A202',
                current:2,
                max:3
            },
            {
                number:'A203',
                current:2,
                max:2
            },
            {
                number:'A204',
                current:0,
                max:4
            }
        ],
        personArray:[   // 人员卡片
            {
                avatar:'https://varlet.gitee.io/varlet-ui/cat.jpg',
                name:'王小明',
                phone:'15951733081',
                status:true // 是否在宿舍楼
            },
            {
                avatar:'https://varlet.gitee.io/varlet-ui/cat.jpg',
                name:'王二明',
                phone:'13746579981',
                status:false
            }
        ]
    }),
    actions: {
        updateArea(title) {
            this.area = title
        },
        changeShowFloor() {
            this.showFloor = !this.showFloor
        },
        // 返回信号灯样式，已废弃
        lampStyle: () => ({
            "--badge-icon-size": '24px',
            "--badge-content-padding": '40px 12px',
            "font-size": '24px'
        })
    },
    getters: {
        getRightName(state) {
            if (state.area === '') return ''
            if (state.area === 'dormitory') return '员工宿舍'
            if (state.area === 'hotel') return '招待所'
        }
    }
})