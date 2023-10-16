import { Component, OnInit } from '@angular/core';
import { YoutubeService } from '../youtube.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css']
})
export class VideoListComponent implements OnInit {
  videos: any[] | undefined; // Almacena los datos de los videos
  videoUrl: SafeResourceUrl; // URL segura para el video

  constructor(private youtubeService: YoutubeService, private sanitizer: DomSanitizer) { 
    this.videoUrl = '';
  }

  ngOnInit(): void {
    // Llama al servicio para obtener los videos
    this.youtubeService.getVideos().subscribe((data: any) => {
      this.videos = data.items;
    });
  }
 


  // Esta función crea una URL segura para el video
  getVideoUrl(videoId: string): SafeResourceUrl {
    if (videoId) {
      const url = `https://www.youtube.com/embed/${videoId}`;
      return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    }
    return '';
  }
}
