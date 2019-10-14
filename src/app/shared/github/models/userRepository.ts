export class UserRepository {
    id: string;
    name: string;
    owner: Owner;
    html_url: string;
    description: string;
    license: License;
}

export class License {
    key: string;
    name: string;
    spdx_id: string;
    url: string;
}

export class Owner {
    login: string;
    avatar_url: string;
    url: string;
    html_url: string;
}