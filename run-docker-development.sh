sudo docker run \
    --interactive \
    --tty \
    --name github-status \
    --rm \
    --publish 3000:3000 \
    --volume "/$(pwd):/github-status" \
    --workdir /github-status \
    --user node \
    --env NODE_ENV=development \
    node:16 \
    /bin/bash
