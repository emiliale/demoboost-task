import ApiResponse from "./utilsAPI";

const env = process.env.NODE_ENV || "development";
const serverUrl =
    env === "development"
        ? "http://localhost:5000"
        : "";

const webpageAPI = {
    async addWebpage(webpage: string) {
        const response = await fetch(`${serverUrl}/webpage`, {
            method: "POST",
            body: JSON.stringify({ webpage }),
            headers: {
                "Content-Type": "application/json"
            }
        });
        if (response.status > 300)
            return new ApiResponse(response.status, await response.text());

        return new ApiResponse(
            response.status,
            `Successfuly added webpage ${webpage}`
        );
    },
};

export default webpageAPI;