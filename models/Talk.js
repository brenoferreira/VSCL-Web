var Talk = function (info) {
    this.id = info.id;
    this.title = info.title;
    this.description = info.description;
    this.start = info.start;
    this.end = info.end
    this.speaker = info.speaker;
};

module.exports = Talk;