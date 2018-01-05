class Api::BlogPostsController < ApplicationController

    def index
      @blog_posts = BlogPost.all
      render "api/blog_posts/index"
    end

    def create
      @blog_post = BlogPost.new(blog_post_params)
      @blog_post.author_id = current_user.id

      if @blog_post.save
        render "api/blog_posts/show"
      else
        render json: @blog_post.errors.full_messages, status: 422
      end
    end

    def show
      @blog_post = BlogPost.find(params[:id])
      render "api/blog_posts/show"
    end

    def update
      @blog_post = BlogPost.find(params[:id])
      if @blog_post.update(blog_post_params)
        render "api/blog_posts/show"
      else
        render json: @blog_post.errors.full_messages, status: 422
      end
    end

    def destroy
      @blog_post = BlogPost.find(params[:id])
      if @blog_post.destroy
        render "api/blog_posts/show"
      else
        render plain: "You can't destroy what's not there."
      end
    end

    private

    def blog_post_params
      params.require(:blog_post).permit(:author_id, :title, :body)
    end

end
