import ApiResponse from "./utilsAPI";

const env = process.env.NODE_ENV || "development";
const serverUrl =
    env === "development"
        ? "http://localhost:5000"
        : "";

const webpageAPI = {
    async addWebpage(name: string, address: string) {
        const response = await fetch(`${serverUrl}/webpages`, {
            method: "POST",
            body: JSON.stringify({ name, address }),
            headers: {
                "Content-Type": "application/json"
            }
        });
        if (response.status > 300)
            return new ApiResponse(response.status, await response.text());

        return new ApiResponse(
            response.status,
            `Successfuly added webpage ${name}`
        );
    },

    async getWebpages() {
        const result = await fetch(`${serverUrl}/webpages`).then((res) => res.json());

        if (!result) return new ApiResponse(400);

        return new ApiResponse(200, result);
    },
};

export default webpageAPI;