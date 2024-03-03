type GraphQuery = {
    query: any
    fragments?: any
    variables?: Record<string, any>
}

export function http(graph: GraphQuery | any, options: RequestInit = {}) {
    let { query = graph } = graph

    if (!query?.loc?.source?.body) {
        throw Error('query not same pattern')
    }

    if (!!query?.fragments && query?.fragments.loc.source.body) {
        query = query.loc.source.body + '/n' + query.fragments.loc.source.body
    }

    return fetch(process.env.NEXT_PUBLIC_API_URL as string, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        ...options,
        body: JSON.stringify({
            query: query.loc.source.body,
            variables: {
                ...(graph?.variables || {}),
            },
        }),
    }).then((res) => res.json())
}
