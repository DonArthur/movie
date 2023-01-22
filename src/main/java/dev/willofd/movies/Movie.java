package dev.willofd.movies;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Document(collection = "movies")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Movie {
    @Id
    private ObjectId _id;
    private String imdbID;
    private String Title;
    private String Released;
    private String Poster;
    private String Genre;
    private List<String> Images;
    private String Director;
    private String Actors;
    private String Year;
    private String Rated;
    private String Runtime;
    private String Writer;
    private String Plot;
    private String Language;
    private String Country;
    private String Awards;
    private String Metascore;
    private String imdbRating;
    private String imdbVotes;
}
