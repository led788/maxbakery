export interface ICategory {

    id: number;
    tags?: (null)[] | null;
    name: string;
    slug: string;
    photo: string;
    active: boolean;
    sort: number;
    extra: iExtra;
    lft: number;
    rght: number;
    tree_id: number;
    level: number;
    parent: number;

}

export interface iExtra {

}

export interface ICategoryData {
    categories: ICategory[]
}

export interface ICategorySingle {
    category: ICategory
}

