const apiUrl = __API_URL___

export interface Answer {
    id: number,
    createdAt: Date,
    updatedAt: Date,
    name: string,
    answer: string,
    isVerified: boolean,
    testId: number
}

export async function searchQuestion(question: string): Promise<Answer[]> {
    const url = new URL(`${apiUrl}/api/questions/search`);
    url.searchParams.append("question", question);
    
    // Tik-tok Timura Shemsedinova zaboronyv vykorystovuvaty axios
    const response = await fetch(url.toString(), {
        method: "GET"
    });
    
    if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
    }
    
    const data = await response.json();
    return data;
}