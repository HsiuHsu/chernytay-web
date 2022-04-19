import React from 'react'
import { List, Paper, Typography } from "@mui/material"
import { makeStyles } from "@mui/styles"

const useStyles = makeStyles((theme) => ({
    mb6: { marginBottom: 6 },
    txt: { color: 'var(--on-surface-variant)' },
    listGroup: {
        listStyle: 'decimal',
        listStylePosition: 'inside',
        marginBottom: 6,
        '& li:nth-last-child(1)': {
            marginBottom: 0
        },
    },
}))

const FaqItem1 = () => {
    const classes = useStyles()
    return (
        <>
            <Typography variant='body1' className={`${classes.mb6} ${classes.txt}`} >冷氣機在經過一長時間運轉後 , 裡面的重要零件會因為冷熱交替的關係 , 附著難以清除的污垢 , 這時候如果沒有作好妥善的保養維修工作 , 除了會阻礙冷氣機的正常運轉外 , 還有可能加速零件的磨損 . 耗費電力 , 以致縮短冷氣機的使用壽命 !</Typography>
            <Typography variant='body1' className={classes.txt}>建議您冷房專用的冷氣機 , 二年需做一次專業保養。如果是冷暖兩用型的冷氣機一年做一次的專業保養。</Typography>
        </>
    )
}
const FaqItem2 = () => {
    const classes = useStyles()
    return (
        <>
            <Typography variant='body1' className={classes.txt}>使用冷氣時之溫度若設定於24°C，是相當清爽舒適的。但冷氣機溫度設定每昇高 1°C 之溫度設定，會幫自己節省6％的電費。而當我們使用冷氣時加上電風扇吹，我們會有溫度降 3°C的感覺。故當我們將冷氣機之溫度設定在27°C，再加上1台電扇時。我們可為自己節省18％之電費，並且得到原先冷氣設定在24°C的效果。</Typography>
        </>
    )
}
const faqItem3Infos = [
    '購買高 EER省電高效率冷氣。',
    '加一台電風扇，冷房效果更好，如果室內是長方形或有彎曲的通道，最好在決定適當的機型後，加一部電風扇，讓冷氣吹的更遠。冷氣房內配合電風扇使用可達到相同的舒適感，並可降低電力消耗。',
    '南北座向是安裝冷氣的最佳座向。由於南北的日曬少，通風良好，因此不需要太強的冷房能力就能產生效果，是安裝冷氣最佳方向。',
    '門窗少開關一次，電費多節省一筆。冷氣最好裝在離出口較遠的地方，因為門窗開關次數越多，流失的冷氣越多。',
    '擋住冷氣出風口，擋住省錢之路。冷氣的出風口忌有大型家俱如衣櫃等擋住，以免影響冷氣流通。',
    '停電之即時處理。應將開關關掉以避免復電時脈衝電流損壞壓縮機。',
    '應隨手關電。省電又安全避免不必要的危機產生。冷氣機不使用時，應養成隨手關電的習慣。',
    '冷熱同源，浪費電力耗能源。冷氣房內避免使用高熱負載之用具，如熨斗、火鍋、炊具等。',
    '避免在房間內使用高熱源電器如吹風機、瓦斯爐等，都會抵銷冷氣的強度。'
]
const FaqItem3 = () => {
    const classes = useStyles()
    return (
        <List disablePadding className={classes.listGroup}>
            {
                faqItem3Infos.map((item, index) => (<Typography key={index} component='li' variant='body1' className={`${classes.mb6} ${classes.txt}`} >{item}</Typography>))
            }
        </List>
    )
}
const faqItem4Infos = [
    '調整適當的溫度：使用冷氣時應選擇在平均 25~28度之間。氣溫28度以下建議您儘量避免使用冷氣機，可打開窗戶使自然風流通或使用電風扇。',
    '使用時溫度設定不低於 28度為宜。若溫度設定每提高1度，將可節省 6 %電力消耗。晚上睡覺時請使用『睡眠定時開關』，冷氣機會自動調整溫度，以避免著涼。使用時風量應適中，以節省能源及降低運轉聲，冷度夠冷時以弱速運轉即可。',
    '冷氣機不要直接吹向人體。同時不要使室內外的溫差過大，保持室內溫度低於室外 3~5 度，以確保人體的健康。與風扇同時使用，可使屋內冷氣分布均勻，而不需降低設定溫度，節省電力。',
    '防止冷氣外洩。檢查冷氣機周邊是否有冷氣外洩，可用膠布貼補。冷氣運轉中應關妥門窗，對於開放式商店則應於入口處裝設空氣門以少冷氣外洩，以免增加耗電。',
    '停用冷氣前可先關掉壓縮機 (由冷氣改為送風或調高溫度設定)，維持5-10分鐘則下次再開冷氣時較為省電且可確保空氣品質。房間(無人)預冷時間不要超過15分鐘。'
]
const FaqItem4 = () => {
    const classes = useStyles()
    return (
        <>
            <Paper sx={{ padding: '12px 16px', textAlign: 'center', marginBottom: 2 }}>
                <Typography variant='body2' className={`${classes.mb6} ${classes.txt}`}>(每度用電定價，請參照台電電價表計時。)</Typography>
                <Typography variant='body1' className={`${classes.mb6} ${classes.txt}`}>每度用電單價 * (冷氣機每小時消耗電力 * 每日使用時間 * 冷氣機運轉率，通常為 (0.65) * 30天 / 1000 = 每月電費金額。</Typography>
                <Typography variant='body2' className={classes.txt}>(舉例 : 窗型冷氣2500Kcal/hr (消耗電力1180w)。每天使用10小時，則電費每月約594元。)</Typography>
            </Paper>
            <List disablePadding className={classes.listGroup}>
                {
                    faqItem4Infos.map((item, index) => (<Typography key={index} component='li' variant='body1' className={`${classes.mb6} ${classes.txt}`}>{item}</Typography>))
                }
            </List>
        </>
    )
}
const faqItem5Infos = [
    '啟動時不會產生震動及噪音︰變頻式冷氣機啟動時，是由低轉速慢慢加速，所以啟動時較為安靜。',
    '節省能源及電費︰變頻式冷氣機之EER值，於低頻時，顯著提高，所以可節省電費支出。',
    '能快速地達到舒適程度︰變頻氏冷氣機開始運轉時，是以高於一般冷氣機2倍的頻率運轉，使室內溫度可以快速冷卻，迅速舒適的環境條件。不會造成供電電壓之脈動電流，造成電壓下降，會造成燈光閃動。'
]
const FaqItem5 = () => {
    const classes = useStyles()
    return (
        <List disablePadding className={classes.listGroup}>
            {
                faqItem5Infos.map((item, index) => (<Typography key={index} component='li' variant='body1' className={`${classes.mb6} ${classes.txt}`}>{item}</Typography>))
            }
        </List>
    )
}
const faqItem6Infos = [
    {
        title: '坪數計算 : 室內空間的 長(單位:公尺) * 寬(單位:公尺) * 0.3025＝坪數'
    }, {
        title: '冷房噸數計算 : 以坪數 ×每坪估算之標準＝總須求熱量。'
    }, {
        title: '冷氣計算單位 : 12000(BTU/H)＝3000(Kcal/h)＝ 1冷凍噸(以每小時為單位)。',
        details: ['BTU/H唸成『每小時多少BTU』，是英、、美國等主要工業國家計算冷度(或熱量)的單位。',
            'Kcal/H唸成『每小時多少仟卡』，是日本常用的冷度(或熱量)單位。',
            '以上 2 種單位台灣均有使用。',
            '其間的關係是 4(BTU/H)＝1(Kcal/h)。',
            '精確則3.968(BTU/H)＝1(Kcal/h)。']
    }, {
        title: '冷氣噸數與房間坪數 : (180公分乘以180公分為一坪，大概為一個雙人床為一坪。)',
        details: ['1噸 : 適用 4~5坪',
            '1.3噸 : 適用 5~7坪',
            '1.5噸 : 適用 6~9坪',
            '1.7噸 : 適用 7~10坪',
            '2.5噸 : 適用 11~14坪',
            '3噸 : 適用 14~17坪']
    }
]
const FaqItem6 = () => {
    const classes = useStyles()
    return (
        <>
            {faqItem6Infos.map((item, index) => (
                <List disablePadding className={classes.listGroup} key={index}>
                    <Typography component='li' variant='body1' sx={{ listStyle: 'disc', listStylePosition: 'inside' }} className={`${classes.mb6} ${classes.txt}`}>{item.title}</Typography>
                    {
                        item.details && item.details.map((detail) => (<Typography key={detail} component='li' variant='body1' className={`${classes.mb6} ${classes.txt}`} sx={{ listStyle: 'none', listStylePosition: 'inside' }}>{detail}</Typography>))
                    }
                </List>
            ))
            }
        </>
    )
}
const FaqItem7 = () => {
    const classes = useStyles()
    return (
        <List disablePadding className={classes.listGroup} >
            <Typography component='li' variant='body1' className={`${classes.mb6} ${classes.txt}`} sx={{ listStyle: 'none' }} >假設冷氣耗電功率是（1.2噸）812W，可是實際的效耗大約是在60%，因為設定的溫度25度過了，它的壓縮機就沒運轉了只有送風機在運轉。所以它的效耗電能大約812W的60%=490W。（調升一度約可以省6%）</Typography>
            <Typography component='li' variant='body1' className={`${classes.mb6} ${classes.txt}`} sx={{ listStyle: 'disc', listStylePosition: 'inside' }} >一天開8小時電費會多少？</Typography>
            <Typography component='li' variant='body1' className={`${classes.mb6} ${classes.txt}`} sx={{ listStyle: 'none' }} >冷氣耗電量490w*8小時=3920w/h=3.92度每日用電量*台電每度大約在3元=11.8元</Typography>
            <Typography component='li' variant='body1' className={`${classes.mb6} ${classes.txt}`} sx={{ listStyle: 'disc', listStylePosition: 'inside' }} >一小時冷氣電費多少？</Typography>
            <Typography component='li' variant='body1' className={classes.txt} sx={{ listStyle: 'none' }} >11.8元/8小時=1.5元</Typography>
        </List>
    )
}
const FaqItem8 = () => {
    const classes = useStyles()
    return (
        <Typography variant='body1' className={classes.txt}>賣場裡有這麼多冷氣，怎麼知道哪一台比較省電呢？答案就在EER。EER是冷氣機的能源效率，Energy Efficiency Rate的縮寫，就是「冷房能力」除以消耗電力的結果，相當於做多少工吃多少飯的比值，所以我們希望冷氣多做工作少吃飯(電)，因此EER值愈高愈好。</Typography>
    )
}
const faqItem9Infos = [
    '設定適當的室溫, 省電又健康',
    '加一台電風扇 , 用電更輕鬆',
    '連接配管短且少彎曲 , 冷氣效果強而不費電',
    '保持出風口順暢無阻 , 減少無謂的耗電',
    '離開室內前十分鐘關冷氣 , 省電積少成多',
    '每週清洗空氣濾網一次 , 冷氣效果更佳',
    '選擇適當的安裝位置 , 避免陽光直射',
    '冷氣口向下吹 , 冷氣不打折',
    '少開門窗 , 多省電費',
    '選擇噸數適中的冷氣 , 舒適又耗電'
]
const FaqItem9 = () => {
    const classes = useStyles()
    return (
        <List disablePadding className={classes.listGroup}>
            {
                faqItem9Infos.map((item, index) => (<Typography key={index} component='li' variant='body1' className={`${classes.mb6} ${classes.txt}`}>{item}</Typography>))
            }
        </List>
    )
}

export const faqItems = [
    {
        title: '冷氣應多久保養一次？',
        item: <FaqItem1 />,
        url: '#faqItem1',
        id: 'faqItem1'
    },
    {
        title: '冷氣使用小秘訣',
        item: <FaqItem2 />,
        url: '#faqItem2',
        id: 'faqItem2'
    },
    {
        title: '關於冷氣，不可不知的事',
        item: <FaqItem3 />,
        url: '#faqItem3',
        id: 'faqItem3'
    },
    {
        title: '精打細算，省電不麻煩',
        item: <FaqItem4 />,
        url: '#faqItem4',
        id: 'faqItem4'
    },
    {
        title: '變頻式冷氣機的優點',
        item: <FaqItem5 />,
        url: '#faqItem5',
        id: 'faqItem5'
    },
    {
        title: '公式換算',
        item: <FaqItem6 />,
        url: '#faqItem6',
        id: 'faqItem6'
    },
    {
        title: '冷氣耗電如何換算？',
        item: <FaqItem7 />,
        url: '#faqItem7',
        id: 'faqItem7'
    },
    {
        title: '如何挑選冷氣？',
        item: <FaqItem8 />,
        url: '#faqItem8',
        id: 'faqItem8'
    },
    {
        title: '冷氣省電絕招',
        item: <FaqItem9 />,
        url: '#faqItem9',
        id: 'faqItem9'
    },

]