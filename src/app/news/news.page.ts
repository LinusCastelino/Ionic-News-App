import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {

  newsData : any;

  constructor(private newsService: NewsService, private router: Router) { }

  ngOnInit() {
    this.newsService.getNews('everything?q=bitcoin&from=2018-12-30&sortBy=publishedAt').subscribe(
      newsData => {
        // console.log(newsData);
        this.newsData = newsData;
      }
    );
  }

  public expandNews(article : any){
    this.newsService.currentArticle = article;
    this.router.navigate(['/news-single']);
  }

}
