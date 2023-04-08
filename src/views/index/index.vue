<template>
    <div
        h-500px
        mb-220px
        :style="{
            backgroundImage: 'url(' + coverImgName + ')',
        }"
        class="box-bg"
    >
        <div w-full h-full class="glass-bg">
            <div class="linear-bg h-full">
                <div
                    h-80px
                    flex
                    justify-between
                    text-white
                    items-center
                    px-12px
                    py-16px
                    mb-20px
                >
                    <div font-bold text-24px>CARBAN ASSET</div>
                    <input
                        type="text"
                        placeholder="Search items, collections, and accounts"
                        class="linear-bg-input"
                    />
                    <div></div>
                </div>
                <div px-16px>
                    <div flex mb-16px class="linear-bg-nav-select">
                        <SelButton
                            mr-8px
                            v-for="button in indexButtonList"
                            :key="button.id"
                            :class="
                                button.id === selectNum
                                    ? 'linear-bg-button-selected'
                                    : ''
                            "
                            @click="toPage(button.id)"
                            ><template #content>{{
                                button.value
                            }}</template></SelButton
                        >
                    </div>
                    <div class="w-full h-500px linear-bg-carousel relative">
                        <div
                            absolute
                            bottom-30px
                            left-30px
                            z-10
                            text-white
                            font-600
                        >
                            <div text-36px font-bold max-w-500px mb-6px>
                                Carbon asset infos
                            </div>
                            <div mb-6px>By lin</div>
                            <div>edition .0.019</div>
                        </div>
                        <div absolute z-11 right-30px bottom-30px flex>
                            <div class="linear-bg-carousel-button flex-center mr-12px">
                                查看视频介绍
                            </div>
                            <div class="linear-bg-carousel-button flex-center">
                                立即购买
                            </div>
                        </div>
                        <div
                            class="w-full h-full linear-bg-carousel-img text-white"
                            :style="{
                                backgroundImage: 'url(' + coverImgName + ')',
                            }"
                        ></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div px-16px mb-16px>
        <div font-bold text-24px mb-6px>Top Collector Buys Today</div>
        <div class="flex py-10px linear-bg-nav-select">
            <div
                class="card mr-16px mb-20px"
                v-for="card in cardsList"
                :key="card.id"
            >
                <div
                    w-full
                    h-200px
                    rounded-t-20px
                    class="linear-bg-nav-card-img"
                    :style="{
                        backgroundImage: 'url(' + card.url + ')',
                    }"
                />
                <div p-16px>
                    <div font-bold>{{ card.name }}</div>
                    <div flex justify-between mt-12px>
                        <div>
                            <div class="text-12px text-#646D75">FLOOR</div>
                            <div>{{ card.floor }}</div>
                        </div>
                        <div>
                            <div class="text-12px text-#646D75">
                                TOTAL VOLUME
                            </div>
                            <div>{{ card.volume }}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
const coverImgName = 'https://p.ipic.vip/v0144p.jpeg'

const indexButtonList = [
    { id: 0, value: 'All' },
    { id: 1, value: 'Carbon' },
    { id: 2, value: 'Memberships' },
    { id: 3, value: 'Other' },
]
const cardsList = [
    {
        id: 0,
        name: 'Nakamigos',
        floor: 0.73,
        volume: 1333,
        url: 'https://p.ipic.vip/bx2om2.png',
    },
    {
        id: 1,
        name: 'XXD34D',
        floor: 0.01,
        volume: 52,
        url: 'https://p.ipic.vip/qsip1v.png',
    },
    {
        id: 2,
        name: 'Delabs Adventure Pass Official',
        floor: 0.14,
        volume: 100,
        url: 'https://p.ipic.vip/lwm1sc.png',
    },
    {
        id: 4,
        name: 'Gemesis',
        floor: 0.04,
        volume: 405,
        url: 'https://p.ipic.vip/tmultl.png',
    },
    {
        id: 5,
        name: 'Gemesis',
        floor: 0.04,
        volume: 405,
        url: 'https://p.ipic.vip/q4hlqh.png',
    },
    {
        id: 6,
        name: 'Gemesis',
        floor: 0.04,
        volume: 405,
        url: 'https://p.ipic.vip/rlx28c.png',
    },
]

const selectNum = ref(0)

const toPage = (id: number) => {
    selectNum.value = id
}
</script>

<style scoped>
.box-bg {
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
}
.glass-bg {
    background: rgba(216, 216, 216, 0.01);

    backdrop-filter: blur(16px);
}
.linear-bg {
    background: linear-gradient(180deg, rgba(0, 0, 0, 0.1) 0%, #ffffff 100%);
}

.linear-bg-input {
    width: 50%;
    height: 100%;
    border: 0;
    padding-left: 12px;
    border-radius: 12px;
    font-weight: 500;
    color: white;
    background-color: rgba(255, 255, 255, 0.2);
    transition: all 0.3s;
}
.linear-bg-input::-webkit-input-placeholder {
    color: rgba(255, 255, 255, 0.3);
    font-size: 16px;
    transition: all 0.3s;
}
.linear-bg-input:hover {
    transition: all 0.3s;
    background-color: rgba(255, 255, 255, 0.4);
}

.linear-bg-nav-select {
    overflow: scroll;
}
.linear-bg-nav-select::-webkit-scrollbar {
    width: 0 !important;
}
.linear-bg-carousel-button {
    padding: 0 20px;
    height: 40px;
    border-radius: 10px;
    font-weight: 500;
    color: #ffffff;
    background: rgba(216, 216, 216, 0.2);

    backdrop-filter: blur(16px);
}

.linear-bg-button-selected {
    background-color: rgba(255, 255, 255, 0.4);
}
.linear-bg-carousel {
    overflow: hidden;
    border-radius: 20px;
    cursor: pointer;
}
.linear-bg-carousel-img:hover {
    transform: scale(1.02);
    transition: all 0.4s;
}
.linear-bg-carousel-img {
    transition: all 0.3s;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
}
.linear-bg-nav-card-img {
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
}
.card {
    min-width: 300px;
    height: 300px;
    border-radius: 10px;
    cursor: pointer;
    transition: all 0.3s;
    box-shadow: rgba(0, 0, 0, 0.08) 0px 4px 16px;
}
.card:hover {
    transform: translateY(-2%);
    transition: all 0.3s;
}
</style>
