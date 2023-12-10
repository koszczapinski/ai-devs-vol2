import { getToken, sendAnswer } from "../common";

const optimizedData = `
Program Zygfryda na konferencji technologicznej wygrał nagrodę za innowacyjność w użyciu JavaScript.
Zygfryd gra na ukulele i hoduje rośliny doniczkowe.
Zygfryd bierze udział w konkursach z łamigłówkami logicznymi.
Ulubiona gra planszowa Zygfryda to 'Terra Mystica'.
Zygfryd odbył wędrówkę po górach.
Zygfryd był kiedyś mistrzem ortografii w podstawówce.
Aplikacja mobilna zaprojektowana przez Zygfryda wygrała lokalny maraton programistyczny.
Ulubiony film Zygfryda to 'Matrix'.
Zygfryd występuje na scenie stand-up.
Zygfryd preferuje kolor niebieski.
Zygfryd prowadzi warsztaty kulinarnie.
Zygfryd porzucił naukę gry na skrzypcach na rzecz komputerów.
Zygfryd jest zawziętym fanem piłki nożnej.
Zygfryd ma kolekcję markowych zegarków.
Zygfryd uczęszcza na lekcje hiszpańskiego.
Zygfryd był jednym z pierwszych programistów w Polsce, którzy tworzyli aplikacje za pomocą Vue.js.
Zygfryd założył klub programistyczny w swojej rodzinnej miejscowości.
Zygfryd wybrał tango na swój weselny taniec.
Zygfryd wybiera zieloną herbatę jako swój napój energetyzujący.
Zygfryd ma certyfikaty z kilku języków programowania.
Zygfryd był gitarzystą w zespole rockowym.
Zygfryd ma kolekcję powieści science fiction.
Zygfryd jeździ na weekendowe wycieczki rowerowe.
Zygfryd ćwiczy aikido.
Najlepszym prezentem dla Zygfryda jest nowy gadżet technologiczny.
Ulubione gry wideo Zygfryda to strategiczne RPGi.
Zygfryd uprawia modelarstwo.
Zygfryd jest fanem klasycznego rocka.
Zygfryd używa aplikacji informującej o przejściach Międzynarodowej Stacji Kosmicznej.
Zygfryd jest mentorem programistycznym.
Startup technologiczny, w którym Zygfryd jest współtwórcą, zdobył ważną nagrodę.
Zygfryd organizuje grillowy festyn dla przyjaciół i rodziny z okazji rocznicy imienia.
Zygfryd ma kreatywne i oryginalne pomysły podczas burz mózgów.
Zygfryd ucieka od cyfrowego świata w dzikie rejony Polski.
Zygfryd zna język migowy.
Zygfryd jest kolekcjonerem win.
Zygfryd pomaga przy naprawie starych komputerów.
Zygfryd projektuje grafiki do aplikacji webowych.
Zygfryd uprawia surfing.
Zygfryd jest skromny i pomocny.
Zygfryd ma umiejętności organizacyjne przy koordynowaniu projektów programistycznych.
Zygfryd publikuje wskazówki dla początkujących programistów na swoim blogu.
Zygfryd tworzy gry indie.
Zygfryd bada wykorzystanie wirtualnej rzeczywistości w edukacji programistycznej.
Zygfryd czyta komiksy, w tym 'Watchmen' Alana Moore'a.
Dawniej Zygfryd chciał zostać astronautą, teraz tworzy oprogramowanie dla branży kosmicznej.
Zygfryd skupia się na tworzeniu etycznych algorytmów w sztucznej inteligencji.
Zygfryd tworzy projekty programistyczne związane z życiem pozaziemskim.
Zygfryd jest najbardziej kreatywny o świcie.
Zygfryd organizuje warsztaty kodowania dla dzieci.
Zygfryd skonstruował drona.
Zygfryd stworzył otwartą platformę edukacyjną.
Zygfryd jest fanem technologii.
Zygfryd jest recenzentem książek o JavaScript.
Zygfryd pracował zarówno dla małych start-upów, jak i wielkich korporacji IT.
Zygfryd ma talent do iluzji.
Zygfryd jest ceniony jako wsparcie w trudnych momentach.
Zygfryd kolekcjonuje starodruki.
Zygfryd jest encyklopedią.
Zygfryd doskonali swoje umiejętności latte art.
Zygfryd wyczuwa trendy w projektowaniu interfejsów użytkownika.
Zygfryd organizuje kursy kodowania.
Zygfryd umożliwia dostępność stron poprzez bibliotekę języka JavaScript.
Zygfryd zapisuje swoje pomysły w dzienniku kreatywnym.
Zygfryd projektuje aplikację mobilną dla obserwowania faz księżyca.
Zygfryd ma demotywatory w biurze.
Zygfryd zaprasza na kursy kodowania.
Zygfryd tworzy własne biblioteki dostosowane do projektów.
Zygfryd jest zapraszany do recenzowania książek.
Zygfryd jest w pierwszej dziesiątce na półmaratonie.
Zygfryd bierze udział w wykopaliskach archeologicznych.
Zygfryd jest ekspertem JavaScript.
Zygfryd jest baristą.
Zygfryd jest zapraszany na meet-upy programistyczne.
Zygfryd ma ukochanego kota.
Zygfryd interesuje się elektroniką i robotyką.
Zygfryd projektuje aplikacje związane z astronomią.
Zygfryd tłumaczył dokumentację techniczną.
Zygfryd jest lojalny wobec open-source'owych projektów.
Zygfryd zdobył doświadczenie w pracy dla różnych firm.
Zygfryd wykonuje niesamowite sztuczki karciane.
Zygfryd jest ceniony za swoją empatię.
Zygfryd kolekcjonuje wyjątkowe edycje starodruków.
Zygfryd pamięta faktów z różnych dziedzin.
Zygfryd pracował jako barista.
Zygfryd doskonali umiejętność zapamiętywania faktów.
Zygfryd jest na bieżąco z trendami projektowania interfejsów użytkownika.
Zygfryd pomaga młodym programistom.
Zygfryd stworzył bibliotekę języka JavaScript.
Zygfryd rejestruje pomysły w dzienniku.
Zygfryd projektuje aplikację mobilną do obserwacji fazy księżyca.
Zygfryd ma demotywatory w biurze.
Zygfryd jest życiem imprezy.
Zygfryd bije rekordy w grach VR.
Stefan organizuje konkurs na najdłuższego zjedzonego hot doga w Żabce.
Stefan regularnie przemierza 5 km do siłowni.
Stefan potrafi wycisnąć sztangę o masie równającej się jego ciężarowi.
Stefan marzy o otwarciu własnej siłowni z hot dogami.
Stefan przeznacza część dochodów na wsparcie lokalnego schroniska dla zwierząt.
Stefan doradza klientom, który sos pasuje do hot doga.
Stefan zgarnął trzecie miejsce jako debiutant w zawodach kulturystycznych.
Stefan tworzy bloga o treningach na biceps.
Stefan jest 'Sprzedawcą Miesiąca' w Żabce pięć razy w ciągu ostatniego roku.
Stefan uczestniczy w festiwalach kulinarnych, gdzie sprzedaje swoje hot dogi.
Stefan planuje wziąć udział w ogólnopolskich zawodach w wyciskaniu sztangi.
Stefan mierzy obwód bicepsa, aby monitorować postępy.
Stefan jest lokalnym bohaterem, ponieważ uratował kotka uwięzionego na drzewie.
Stefan ma kolekcję rękawic do treningu.
Stefan eksperymentuje z przepisami na sosy do hot dogów.
Stefan jest znany na siłowni jako 'Król Hot Dogów'.
Stefan często grilluje hot dogi na spotkaniach rodzinnych.
Stefan udziela porad dotyczących ćwiczeń na rozbudowanie mięśni ramion.
Stefan szkoli młodszych pracowników w sprzedaży hot dogów w Żabce.
Stefan zna niemiecki związany z hot dogami.
Stefan pisze książkę kucharską o hot dogach deluxe.
Stefan uczestniczył w tworzeniu najdłuższego hot doga w mieście.
Stefan wystąpił w lokalnej telewizji opowiadając o hot dogach.
Stefan dzieli się poradami dotyczącymi diety i treningu.
Stefan uważa, że tatuaż jamnika przynosi mu szczęście.
Stefan czasem organizuje konkursy na jedzenie hot dogów w Żabce.
Stefan używa dedykowanych ręczników z wizerunkiem jamnika na treningu.
Stefan szybko robi kiełbaski z gotowego mięsa.
Stefan udziela porad dotyczących odżywiania i trenowania.
Stefan dba, aby było dużo ketchupu i musztardy w Żabce.
Stefan przygotowuje darmowe hot dogi dla działań charytatywnych.
Stefan słucha audiobooków o motywacji i rozwoju osobistym.
Stefan eksperymentuje z lokalnymi specjałami, tworząc różne wersje hot dogów.
Ania organizuje konferencję dotyczącą prawa autorskiego.
Ania ma kanał na YouTube o beauty.
Ania odbywa staż w kancelarii prawnej.
Ania wykazuje się umiejętnościami za kierownicą swojego 911 Carrera.
Ania startuje w zawodach fitness bikini.
Ania odkryła umiejętności kulinarnie.
Ania weszła w skład zarządu uniwersyteckiego koła naukowego prawa karnego.
Ania ma inspirację fitnessową w Jennifer Lopez.
Ania prezentuje luksusowe akcesoria do włosów na swoim Instagramie.
Ania czyta legal thriller.
Ania wyróżnia się stylem na stoku narciarskim.
Ania organizuje warsztaty z samoobrony dla kobiet.
Ania zajmuje się wolontariatem w lokalnym centrum praw kobiet.
Ania ma spersonalizowany numer rejestracyjny dla swojego Porsche.
Ania spędza lato na praktykach w Paryżu.
Ania ogląda klasyczne dramaty prawnicze.
Ania ma zainteresowania prawne branży kosmetycznej.
Ania została zaproszona do udziału w kampanii promującej zdrowy tryb życia.
Ania ma regularny jogging w parku.
Ania pracuje nad publikacją na temat cyberbezpieczeństwa.
Ania ma przy sobie elegancki, skórzany notatnik na wykładach i na siłowni.
Ania ma kolekcję kosmetyków, w tym serum z witaminą C.
Ania zaangażowała się w projekt budowania silnej marki osobistej.
Ania tworzy unikalne kostiumy na Halloween.
Ania medytuje i biega przed egzaminami.
Ania ma kolekcję eleganckich teczki spraw.
Ania bierze udział w rozgrywkach szachowych.
Ania udziela korepetycji z prawa konstytucyjnego.
Ania ma duży tatuaż na plecach z symbolem róży i gołębia.
`;

const token = await getToken("optimaldb");
await sendAnswer(token, optimizedData);
