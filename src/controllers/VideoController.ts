import { Request, Response } from "express";
import { VideoService } from "../services/VideoService";

export class VideoController {
    async create(request: Request, response: Response) {
        const {name, description, duration, category_id} = request.body;

        const service = new VideoService();

        const result = service.create({
            name, 
            description,
            duration,
            category_id
        });

        if(result instanceof Error) {
            return response.status(400).json(result.message);
        }

        return response.json(result);
    }

    async list(request: Request, response: Response) {
        const service = new VideoService();

        const videos = await service.read();

        return response.json(videos);
    }
}