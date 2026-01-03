interface BuildQueryParams {
  type: string;
  query: string;
  category: string;
  page: number;
  perPage?: number;
}

export function buildQuery(params: BuildQueryParams) {
  const { type, query, category, page = 1, perPage = 6 } = params;

  // 1. Initialize conditions with the document type
  const conditions = [`_type == "${type}"`];

  // 2. Add search query filter if it exists
  if (query) {
    conditions.push(`title match "*${query}*"`);
  }

  // 3. Add category filter if it's not "all"
  if (category && category !== 'all') {
    conditions.push(`category == "${category}"`);
  }

  /**
   * 4. Calculate Pagination
   * In GROQ, [0...10] means index 0 to 9 (10 items).
   * Page 1: [0...6]
   * Page 2: [6...12]
   */
  const offset = (page - 1) * perPage;
  const limit = offset + perPage; 

  // 5. Construct the final query string
  // It joins conditions with ' && ' and wraps them in *[ ... ]
  if (conditions.length > 1) {
    return `*[${conditions.join(' && ')}][${offset}...${limit}]`;
  } else {
    return `*[_type == "${type}"][${offset}...${limit}]`;
  }
}

/* interface BuildQueryParams {
    type: string;
    query: string;
    category: string;
    page: number;
    perPage?: number;
} 

export function buildQuery(params:BuildQueryParams) {
  const { type, query, category, page = 1, perPage = 10 } = params;

  const conditions = [`*[_type=="${type}"]`];

  if (query) {
    conditions.push(`title match "*${query}*"`)
  }

    if (category && category !== 'all') {
      conditions.push(`category == "${category}"`);
    }

    // calculate pagination limits
    const offset = (page - 1) * perPage;
    const limit = perPage;

    if(conditions.length > 1) {
      return `${conditions[0]} && (${conditions.slice(1).join(' && ')})][${offset}...${limit}]`
    } else {
      return `${conditions[0]}[${offset}...${limit}]`;
    }
}
*/