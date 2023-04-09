class Twitter {
    private tweetPosts: number[];
    private tweetUsers: number[];
    private followings: Object;

    constructor() {
        this.tweetPosts = [];
        this.tweetUsers = [];
        this.followings = {};
    }

    // 사용자 userId의 ID tweetId로 새 트윗을 작성합니다. 이 기능에 대한 각 통화는 고유한 tweetId로 이루어집니다.
    postTweet(userId: number, tweetId: number): void {
        console.log('[postTweet] ', this.tweetPosts);
        console.log('[postTweet] ', this.tweetUsers);
        console.log('[postTweet] ', this.followings);
        console.log('----------------------postTweet-----------------------');

        this.tweetPosts = [...this.tweetPosts, tweetId];
        this.tweetUsers = [...this.tweetUsers, userId];
    }

    // 사용자의 뉴스피드에서 최근 트윗 ID 10개를 검색합니다. 
    // 뉴스 피드의 각 항목은 사용자가 팔로우한 사용자 또는 사용자가 직접 게시해야 합니다. 
    // 트윗은 가장 최근에서 가장 최근 순서로 정렬해야 합니다.
    getNewsFeed(userId: number): number[] {
        console.log('[getNewsFeed] ', this.tweetPosts);
        console.log('[getNewsFeed] ', this.tweetUsers);
        console.log('[getNewsFeed] ', this.followings);
        console.log('----------------------getNewsFeed-----------------------');

        const limit = this.tweetPosts.length > 10? 10 : this.tweetPosts.length;
        let feed = [];
        let count = 0;
        for (let i: number = this.tweetPosts.length - 1; i >= 0; i--) {
            if (count === limit) {
                break;
            }
            if (this.tweetUsers[i] === userId) {
                feed.push(this.tweetPosts[i]);
                count++;
            } else if (this.followings[userId] && this.followings[userId].includes(this.tweetUsers[i])) {
                feed.push(this.tweetPosts[i]);
                count++;
            }
        }
        return feed;
    }

    // ID가 followeId인 사용자가 ID가 followeId인 사용자를 팔로우하기 시작했습니다.
    follow(followerId: number, followeeId: number): void {
        console.log('[follow] ', this.tweetPosts);
        console.log('[follow] ', this.tweetUsers);
        console.log('[follow] ', this.followings);
        console.log('----------------------follow-----------------------');

        if (!this.followings[followerId]) {
            this.followings[followerId] = [];
        }
        this.followings[followerId] = [...this.followings[followerId], followeeId];
    }

    // ID가 followeId인 사용자가 ID가 followeId인 사용자를 팔로우 해제하기 시작했습니다.
    unfollow(followerId: number, followeeId: number): void {
        console.log('[unfollow] ', this.tweetPosts);
        console.log('[unfollow] ', this.tweetUsers);
        console.log('[unfollow] ', this.followings);
        console.log('----------------------unfollow-----------------------');

        this.followings[followerId]?.find((follow, index)=>{
            if(follow === followeeId) {
                delete this.followings[followerId][index];
            }
            return false;
        });
    }
}

/**
 * Your Twitter object will be instantiated and called as such:
 * var obj = new Twitter()
 * obj.postTweet(userId,tweetId)
 * var param_2 = obj.getNewsFeed(userId)
 * obj.follow(followerId,followeeId)
 * obj.unfollow(followerId,followeeId)
 */