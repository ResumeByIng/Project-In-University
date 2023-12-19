export const AssessmentService = {
    getAssessmentData() {
        return [
            {
                clause:'1',
                list:'ให้คำปรึกษาเป็นมิตร จรืงใจ และเป็นกันเอง',
            },
            {
                clause:'2',
                list:'เป็นความประพฤติที่เหมาะสม',
            },
            {
                clause:'3',
                list:'ให้นักศึกษาเข้าพบตามที่นัดหมายและมีเวลาในการให้คำปรึกษาอย่างเพียงพอ',
            },
            {
                clause:'4',
                list:'รับฟังความคิดเห็นและเข้าใจความรู้สึกของนักศึกษา',
            },
            {
                clause:'5',
                list:'มีการติดตามผลการให้คำปรึกษา และเอาใจใส่นักศึกษาอย่างทั่วถึง และสม่ำเสมอ',
            },
        ];
    },

    getAssessmentMini() {
        return Promise.resolve(this.getAssessmentData().slice(0, 5));
    },

    getAssessmentSmall() {
        return Promise.resolve(this.getAssessmentData().slice(0, 10));
    },

    getAssessment() {
        return Promise.resolve(this.getAssessmentData());
    },
};