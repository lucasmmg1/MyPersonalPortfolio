class CategoryView
{
    static name;
    static tags = [];
    static mode;
    static type;
    static projects;

    static element;

    constructor(name, tags, mode, type, projects = undefined)
    {
        this.name = name;
        this.tags = tags;
        this.mode = mode;
        this.type = type;
        this.projects = projects;
    }
}