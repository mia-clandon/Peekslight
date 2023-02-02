import {Arg, Field, InputType, Mutation, Query, Resolver} from "type-graphql";
import {createWriteStream} from "fs";
import path from "path";

const files = [];

@InputType()
class UploadFile {
    @Field()
    files: [string]
    // @Field()
    // uploadFile(file: Upload!): Boolean
}

@Resolver(UploadFile)
export class UploadFileResolver {
    @Query(() => UploadFile)

    @Mutation(() => UploadFile)
    async upload(
        @Arg("_") _: any,
        @Arg("file") file: any
    ): Promise<UploadFile | true> {
        const {createReadStream, filename} = await file;

        await new Promise(res =>
            createReadStream()
                .pipe(createWriteStream(path.join(__dirname, "../images", filename)))
                .on("close", res)
        );

        files.push(filename);

        return true;
    }
}

