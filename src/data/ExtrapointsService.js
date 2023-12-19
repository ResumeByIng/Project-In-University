export const ExtrapointsService = {
    getExtrapointsData() {
        return [
            {
                clause:'1',
                list:'ประชาสัมพันธ์สาขาผ่าน Facebook/Twitter/Community จำนวน 10 ครั้ง/เดือน',
                points:'2',
            },
            {
                clause:'2',
                list:'ประชาสัมพันธ์สาขาผ่าน Pantip/Dek-d ด้วยการสร้างกระทู้ จำนวน 5 ครั้ง/เดือน',
                points:'2',
            },
            {
                clause:'3',
                list:'ประชาสัมพันธ์สาขาผ่านโรงเรียน',
                points:'8',
            },
            {
                clause:'4',
                list:'ประชาสัมพันธ์สาขาผ่านโรงเรียนเก่าของตัวเอง',
                points:'8',
            },
            {
                clause:'5',
                list:'ช่วยเเหลืออาจารย์ตามที่ได้รับมอบหมาย 10 ครั้ง/เดือน',
                points:'2',
            },
            {
                clause:'6',
                list:'เข้าร่วมอบรม/สัมมนาที่มีหน่วยงานของรัฐและเอกชนเป็นเจ้าภาพ',
                points:'2',
            },
            {
                clause:'7',
                list:'ทำโครงการของสาขา/บริการวิชาการ',
                points:'5',
            },
            {
                clause:'8',
                list:'เข้าร่วมการแข่งขันเกมและผ่านเข้ารอบแรก 1 ครั้ง/รอบการประเมิน',
                points:'3',
            },
            {
                clause:'9',
                list:'เข้าร่วมการแข่งขันทักษะวิศวกรรมคอมพิวเตอร์',
                points:'4',
            },
            {
                clause:'10',
                list:'รับรางวัล (อันดับ 1 - 4) ในการแข่งขันเกม ',
                points:'10',
            },
            {
                clause:'11',
                list:'รับรางวัล (อันดับ 1 - 4) ในการแข่งขันทักษะวิศวกรรมคอมพิวเตอร์ ',
                points:'10',
            },
            {
                clause:'12',
                list:'นำเสนอผลงานทางวิชาการในระดับชาติ',
                points:'10',
            },
            {
                clause:'13',
                list:'นำเสนอผลงานทางวิชาการในระดับนานาชาติ/ตีพิมพ์วารสาร',
                points:'10',
            },
            {
                clause:'14',
                list:'สร้าง Content ใน Youtube หัวข้อต้องเกี่ยวกับการประชาสัมพันธ์สาขา และไม่เกี่ยวข้องกับคะแนนในวิชาเรียน',
                points:'10',
            },
        ];
    },

    getExtrapointsMini() {
        return Promise.resolve(this.getExtrapointsData().slice(0, 5));
    },

    getExtrapointsSmall() {
        return Promise.resolve(this.getExtrapointsData().slice(0, 10));
    },

    getExtrapoints() {
        return Promise.resolve(this.getExtrapointsData());
    },
};