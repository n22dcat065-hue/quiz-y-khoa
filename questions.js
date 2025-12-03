// Dữ liệu câu hỏi theo chủ đề
const questionsData = {
    "TUYẾN GIÁP": [
        {
            question: "Tuyến giáp có chức năng chính là gì?",
            answers: ["Tiết insulin điều hòa đường huyết", "Tiết hormon kiểm soát tốc độ chuyển hóa cơ thể", "Sản xuất enzym tiêu hóa", "Kiểm soát huyết áp"],
            correct: 1
        },
        {
            question: "Rối loạn nào sau đây thuộc nhóm rối loạn chức năng tuyến giáp?",
            answers: ["Viêm tuyến giáp Hashimoto", "Cường giáp và suy giáp", "Ung thư tuyến giáp thể nhú", "U tuyến giáp lành tính"],
            correct: 1
        },
        {
            question: "Nguyên nhân phổ biến nhất của cường giáp là gì?",
            answers: ["Viêm tuyến giáp Hashimoto", "Bệnh Graves", "Thiếu i-ốt", "Ung thư tuyến giáp"],
            correct: 1
        },
        {
            question: "Viêm tuyến giáp Hashimoto là một bệnh lý thuộc nhóm nào?",
            answers: ["Viêm tuyến giáp do virus", "Viêm tuyến giáp tự miễn", "Viêm tuyến giáp cấp tính do vi khuẩn", "Ung thư tuyến giáp"],
            correct: 1
        },
        {
            question: "Loại ung thư tuyến giáp nào phổ biến nhất?",
            answers: ["Carcinôm tuyến giáp thể nhú (PTC)", "Carcinôm tuyến giáp thể tủy (MTC)", "Ung thư không biệt hóa tuyến giáp", "Sarcoma tuyến giáp"],
            correct: 0
        },
        {
            question: "Yếu tố nào quyết định tiên lượng của ung thư tuyến giáp thể nang?",
            answers: ["Đột biến BRAF", "Xâm lấn bao hoặc mạch máu", "Mức độ tăng TSH", "Khả năng hấp thụ iod phóng xạ"],
            correct: 1
        },
        {
            question: "Ung thư tuyến giáp thể tủy có nguồn gốc từ loại tế bào nào?",
            answers: ["Tế bào nang tuyến giáp", "Tế bào C (tế bào cận nang)", "Tế bào liên kết", "Tế bào lympho"],
            correct: 1
        },
        {
            question: "Ung thư tuyến giáp không biệt hóa có đặc điểm gì?",
            answers: ["Tiến triển chậm, tiên lượng tốt", "Xâm lấn mạnh, tiến triển nhanh", "Nhạy cảm với iod phóng xạ", "Thường gặp ở người trẻ tuổi"],
            correct: 1
        },
        {
            question: "Nốt tuyến giáp nào có nguy cơ ác tính cao nhất?",
            answers: ["Nốt nhỏ, bờ rõ, giàu keo", "Nốt tăng sinh mạch máu, vi vôi hóa", "Nốt chứa nhiều dịch", "Nốt giảm hấp thu trên xạ hình tuyến giáp"],
            correct: 1
        },
        {
            question: "Bệnh tuyến giáp nào phổ biến nhất trong cộng đồng?",
            answers: ["Viêm tuyến giáp Hashimoto", "Cường giáp", "Suy giáp do thiếu i-ốt", "Bướu giáp đa nhân"],
            correct: 3
        },
        {
            question: "Xét nghiệm nào có giá trị cao nhất trong đánh giá chức năng tuyến giáp?",
            answers: ["Định lượng TSH và FT4", "Định lượng glucose máu", "Đo nồng độ insulin", "Xét nghiệm CRP"],
            correct: 0
        },
        {
            question: "Xét nghiệm nào giúp theo dõi tái phát ung thư tuyến giáp thể nhú?",
            answers: ["Thyroglobulin", "Calcitonin", "PSA", "AFP"],
            correct: 0
        },
        {
            question: "Thành phần tế bào nào của tuyến giáp sản xuất hormon T3 và T4?",
            answers: ["Tế bào C", "Tế bào nang tuyến", "Tế bào liên kết", "Tế bào lympho"],
            correct: 1
        },
        {
            question: "Tế bào C của tuyến giáp có chức năng gì?",
            answers: ["Sản xuất thyroglobulin", "Tiết hormon calcitonin", "Tiết hormon TSH", "Tạo cấu trúc mô đệm tuyến giáp"],
            correct: 1
        },
        {
            question: "Đột biến BRAF V600E thường gặp nhất trong loại ung thư tuyến giáp nào?",
            answers: ["Ung thư tuyến giáp thể nhú", "Ung thư tuyến giáp thể nang", "Ung thư tuyến giáp thể tủy", "Ung thư tuyến giáp không biệt hóa"],
            correct: 0
        },
        {
            question: "Ung thư tuyến giáp thể tủy liên quan đến đột biến gen nào?",
            answers: ["RET", "RAS", "BRAF", "TP53"],
            correct: 0
        },
        {
            question: "Loại ung thư tuyến giáp nào có tiên lượng xấu nhất?",
            answers: ["Ung thư tuyến giáp thể nhú", "Ung thư tuyến giáp thể nang", "Ung thư tuyến giáp thể tủy", "Ung thư tuyến giáp không biệt hóa"],
            correct: 3
        },
        {
            question: "Đặc điểm mô học nào giúp chẩn đoán ung thư tuyến giáp thể nhú?",
            answers: ["Nhân dạng \"Orphan Annie\"", "Lắng đọng amyloid", "Xâm lấn mạch máu", "Hoại tử lan rộng"],
            correct: 0
        },
        {
            question: "Thể cát (psammoma bodies) trong mô bệnh học là dấu hiệu đặc trưng của loại ung thư tuyến giáp nào?",
            answers: ["Ung thư tuyến giáp thể nhú", "Ung thư tuyến giáp thể nang", "Ung thư tuyến giáp thể tủy", "Ung thư không biệt hóa"],
            correct: 0
        },
        {
            question: "Yếu tố nào KHÔNG giúp phân biệt ung thư tuyến giáp thể nang với u tuyến tuyến giáp thể nang?",
            answers: ["Đột biến RAS", "Xâm lấn bao", "Xâm lấn mạch máu", "Thể cát (psammoma bodies)"],
            correct: 3
        },
        {
            question: "Xét nghiệm nào được sử dụng để đánh giá chức năng tuyến giáp?",
            answers: ["FT3, FT4, TSH", "Calcitonin", "PSA", "AFP"],
            correct: 0
        },
        {
            question: "Xét nghiệm nào giúp phát hiện ung thư tuyến giáp thể tủy?",
            answers: ["Thyroglobulin", "Calcitonin", "PSA", "CEA"],
            correct: 1
        },
        {
            question: "Giá trị bình thường của TSH trong máu thường nằm trong khoảng nào?",
            answers: ["0.4 - 4.0 mIU/L", "10 - 20 mIU/L", "0.01 - 0.1 mIU/L", "5 - 15 mIU/L"],
            correct: 0
        },
        {
            question: "Chỉ số TSH thấp cùng với FT4 cao gợi ý bệnh lý nào?",
            answers: ["Suy giáp nguyên phát", "Cường giáp", "Suy giáp thứ phát", "Viêm tuyến giáp Hashimoto"],
            correct: 1
        },
        {
            question: "Chỉ số TSH cao cùng với FT4 thấp gợi ý bệnh lý nào?",
            answers: ["Viêm tuyến giáp Hashimoto", "Cường giáp", "Ung thư tuyến giáp", "Viêm tuyến giáp De Quervain"],
            correct: 0
        },
        {
            question: "Phương pháp hình ảnh nào giúp đánh giá tính chất của nốt tuyến giáp?",
            answers: ["Siêu âm tuyến giáp", "X-quang cổ", "MRI não", "Điện tâm đồ (ECG)"],
            correct: 0
        },
        {
            question: "Đặc điểm nào trên siêu âm gợi ý nốt tuyến giáp ác tính?",
            answers: ["Nốt có bờ không đều", "Nốt có vi vôi hóa", "Nốt tăng sinh mạch máu", "Tất cả các đáp án trên"],
            correct: 3
        },
        {
            question: "Phương pháp nào được xem là tiêu chuẩn vàng trong chẩn đoán ung thư tuyến giáp?",
            answers: ["Chọc hút tế bào bằng kim nhỏ (FNA)", "MRI", "Xạ hình tuyến giáp", "Xét nghiệm thyroglobulin"],
            correct: 0
        },
        {
            question: "Xét nghiệm nào giúp theo dõi tái phát ung thư tuyến giáp thể nhú sau điều trị?",
            answers: ["Calcitonin", "Thyroglobulin", "PSA", "AFP"],
            correct: 1
        },
        {
            question: "Khi nào nên làm xạ hình tuyến giáp bằng iod phóng xạ?",
            answers: ["Đánh giá nốt tuyến giáp chức năng cao hay thấp", "Theo dõi sau điều trị ung thư tuyến giáp thể nhú", "Đánh giá di căn ung thư tuyến giáp thể nang", "Tất cả các đáp án trên"],
            correct: 3
        },
        {
            question: "Phương pháp điều trị chính cho ung thư tuyến giáp thể nhú (PTC) là gì?",
            answers: ["Xạ trị", "Cắt toàn bộ tuyến giáp", "Hóa trị", "Điều trị nội tiết"],
            correct: 1
        },
        {
            question: "Khi nào chỉ định cắt thùy tuyến giáp thay vì cắt toàn bộ tuyến giáp trong điều trị ung thư tuyến giáp?",
            answers: ["Khi khối u nhỏ hơn 1 cm, không có di căn hạch", "Khi có di căn xa", "Khi bệnh nhân có đột biến BRAF", "Khi khối u xâm lấn mô xung quanh"],
            correct: 0
        },
        {
            question: "Liệu pháp iod phóng xạ (RAI) được chỉ định trong trường hợp nào?",
            answers: ["Ung thư tuyến giáp thể nhú hoặc thể nang sau phẫu thuật", "Ung thư tuyến giáp thể tủy", "Ung thư tuyến giáp không biệt hóa", "Viêm tuyến giáp Hashimoto"],
            correct: 0
        },
        {
            question: "Mục tiêu của điều trị bằng levothyroxine sau phẫu thuật ung thư tuyến giáp biệt hóa là gì?",
            answers: ["Giảm TSH để ức chế sự phát triển tế bào ác tính còn sót lại", "Tăng TSH để kích thích tuyến giáp hoạt động", "Duy trì TSH ở mức cao để ức chế sự phát triển ung thư", "Không có vai trò trong điều trị sau phẫu thuật"],
            correct: 0
        },
        {
            question: "Thuốc ức chế kinase RET như selpercatinib được sử dụng trong điều trị ung thư tuyến giáp nào?",
            answers: ["Ung thư tuyến giáp thể tủy có đột biến RET", "Ung thư tuyến giáp thể nhú", "Viêm tuyến giáp Hashimoto", "Bướu giáp keo"],
            correct: 0
        },
        {
            question: "Khi nào hóa trị được sử dụng trong điều trị ung thư tuyến giáp?",
            answers: ["Trong ung thư tuyến giáp không biệt hóa hoặc ung thư tuyến giáp tiến triển", "Trong ung thư tuyến giáp thể nhú giai đoạn sớm", "Trong bướu giáp lành tính", "Trong viêm tuyến giáp Hashimoto"],
            correct: 0
        },
        {
            question: "Trong điều trị suy giáp, levothyroxine nên được uống vào thời điểm nào?",
            answers: ["Buổi sáng lúc đói", "Buổi sáng sau khi ăn", "Trước khi đi ngủ", "Uống cùng bữa ăn chính"],
            correct: 0
        },
        {
            question: "Bệnh nhân bị cơn bão giáp cần được điều trị ngay bằng thuốc nào?",
            answers: ["Propranolol, PTU, corticosteroid", "Levothyroxine", "Calcitonin", "Methimazole đơn thuần"],
            correct: 0
        },
        {
            question: "Biến chứng quan trọng sau cắt tuyến giáp toàn bộ là gì?",
            answers: ["Hạ calci máu do suy cận giáp", "Cường giáp", "Hạ đường huyết", "Tăng kali máu"],
            correct: 0
        },
        {
            question: "Khi nào cần chỉ định nạo hạch cổ trong ung thư tuyến giáp?",
            answers: ["Khi có bằng chứng di căn hạch bạch huyết", "Khi có đột biến BRAF", "Khi khối u nhỏ hơn 1 cm", "Khi có viêm tuyến giáp Hashimoto"],
            correct: 0
        },
        {
            question: "Một bệnh nhân nữ 45 tuổi phát hiện có nốt tuyến giáp 2 cm trên siêu âm, TSH bình thường. Bước tiếp theo là gì?",
            answers: ["Chọc hút tế bào bằng kim nhỏ (FNA)", "Điều trị ngay bằng levothyroxine", "Xạ hình tuyến giáp", "Không cần làm gì thêm"],
            correct: 0
        },
        {
            question: "Một bệnh nhân có ung thư tuyến giáp thể tủy, xét nghiệm nào giúp theo dõi tái phát?",
            answers: ["Calcitonin", "Thyroglobulin", "PSA", "AFP"],
            correct: 0
        },
        {
            question: "Một bệnh nhân có chẩn đoán viêm tuyến giáp De Quervain. Điều trị nào phù hợp nhất?",
            answers: ["NSAIDs và corticosteroid nếu cần", "Levothyroxine ngay lập tức", "Iod phóng xạ", "Phẫu thuật cắt tuyến giáp"],
            correct: 0
        },
        {
            question: "Một bệnh nhân bị suy giáp nhưng không tuân thủ điều trị levothyroxine trong nhiều tháng có thể gặp biến chứng gì?",
            answers: ["Hôn mê phù niêm", "Cơn bão giáp", "Hạ kali máu", "Cường giáp"],
            correct: 0
        },
        {
            question: "Triệu chứng nào thường gặp nhất trong ung thư tuyến giáp tiến triển?",
            answers: ["Khàn tiếng do xâm lấn dây thần kinh quặt ngược", "Đau bụng", "Sốt kéo dài", "Chảy máu cam"],
            correct: 0
        },
        {
            question: "Trong bướu giáp đơn nhân, yếu tố nào gợi ý ác tính?",
            answers: ["Nốt cứng, cố định, phát triển nhanh", "Nốt mềm, di động", "Nốt kích thước nhỏ hơn 1 cm", "Không có triệu chứng lâm sàng"],
            correct: 0
        },
        {
            question: "Tiên lượng của ung thư tuyến giáp thể nhú giai đoạn sớm là gì?",
            answers: ["Tỷ lệ sống sau 10 năm trên 95%", "Tỷ lệ sống dưới 20%", "Tỷ lệ tái phát rất cao", "Điều trị không hiệu quả"],
            correct: 0
        },
        {
            question: "Ung thư tuyến giáp không biệt hóa có thời gian sống trung bình là bao lâu?",
            answers: ["Dưới 6 tháng", "5 - 10 năm", "Hơn 15 năm", "Không ảnh hưởng đến tuổi thọ"],
            correct: 0
        },
        {
            question: "Một bệnh nhân có ung thư tuyến giáp thể tủy di căn, lựa chọn điều trị tối ưu là gì?",
            answers: ["Thuốc ức chế RET như selpercatinib", "Iod phóng xạ", "Phẫu thuật cắt toàn bộ tuyến giáp", "Methimazole"],
            correct: 0
        },
        {
            question: "Khi nào cần theo dõi thyroglobulin sau điều trị ung thư tuyến giáp?",
            answers: ["Định kỳ để phát hiện tái phát", "Khi có triệu chứng suy giáp", "Khi bệnh nhân bị viêm tuyến giáp Hashimoto", "Khi bệnh nhân dùng levothyroxine"],
            correct: 0
        },
        {
            question: "Một bệnh nhân nữ 52 tuổi có bướu giáp lớn, cảm giác chèn ép vùng cổ, khó nuốt. Xét nghiệm TSH bình thường. Siêu âm phát hiện bướu giáp đa nhân, có một nốt 3 cm nghi ngờ ác tính. Bước tiếp theo là gì?",
            answers: ["Chọc hút tế bào bằng kim nhỏ (FNA)", "Điều trị bằng iod phóng xạ", "Cho uống levothyroxine để thu nhỏ bướu", "Chỉ theo dõi định kỳ"],
            correct: 0
        },
        {
            question: "Một bệnh nhân 60 tuổi có ung thư tuyến giáp thể nang, đã phẫu thuật cắt toàn bộ tuyến giáp. Bước điều trị tiếp theo là gì?",
            answers: ["Dùng iod phóng xạ để tiêu diệt mô còn sót lại", "Điều trị bằng hóa trị ngay lập tức", "Theo dõi TSH mà không cần điều trị thêm", "Sử dụng thuốc chẹn beta để kiểm soát nhịp tim"],
            correct: 0
        },
        {
            question: "Một bệnh nhân có ung thư tuyến giáp thể tủy, xét nghiệm nào giúp đánh giá nguy cơ di truyền?",
            answers: ["Xét nghiệm đột biến RET", "Xét nghiệm thyroglobulin", "Siêu âm tuyến giáp", "Xét nghiệm calcitonin"],
            correct: 0
        },
        {
            question: "Một bệnh nhân nam 55 tuổi, tiền sử ung thư tuyến giáp thể nhú, đã cắt toàn bộ tuyến giáp và điều trị iod phóng xạ. Sau 5 năm, xét nghiệm thyroglobulin tăng cao. Điều này có ý nghĩa gì?",
            answers: ["Khả năng cao là bệnh tái phát hoặc di căn", "Không có ý nghĩa lâm sàng", "Chỉ cần điều trị bằng levothyroxine", "Do bệnh nhân thiếu i-ốt"],
            correct: 0
        },
        {
            question: "Một bệnh nhân bị suy giáp, đang điều trị bằng levothyroxine, nhưng vẫn có triệu chứng mệt mỏi và tăng cân. Nguyên nhân nào có thể gây ra tình trạng này?",
            answers: ["Liều levothyroxine chưa đủ", "Bệnh nhân mắc cường giáp", "Bệnh nhân không mắc bệnh tuyến giáp", "Bệnh nhân bị ung thư tuyến giáp"],
            correct: 0
        },
        {
            question: "Một bệnh nhân nữ 28 tuổi mang thai tuần thứ 12 được chẩn đoán cường giáp do bệnh Graves. Lựa chọn điều trị nào an toàn nhất trong thai kỳ?",
            answers: ["Propylthiouracil (PTU) trong 3 tháng đầu, sau đó chuyển sang Methimazole", "Methimazole ngay từ đầu", "Iod phóng xạ", "Phẫu thuật ngay lập tức"],
            correct: 0
        },
        {
            question: "Một bệnh nhân có nốt tuyến giáp phát triển nhanh, cứng, cố định, có khàn tiếng và hạch cổ to. Chẩn đoán nào cần được xem xét đầu tiên?",
            answers: ["Ung thư tuyến giáp không biệt hóa", "Viêm tuyến giáp Hashimoto", "Bướu giáp keo", "Suy giáp"],
            correct: 0
        },
        {
            question: "Một bệnh nhân nam 65 tuổi có ung thư tuyến giáp di căn đến phổi. Phương pháp điều trị nào phù hợp nhất?",
            answers: ["Liệu pháp nhắm đích (Lenvatinib, Sorafenib)", "Hóa trị", "Phẫu thuật cắt bỏ di căn phổi", "Không cần điều trị do tiên lượng tốt"],
            correct: 0
        },
        {
            question: "Một bệnh nhân nữ 45 tuổi có bướu giáp lớn, chèn ép khí quản, gây khó thở. Lựa chọn điều trị phù hợp nhất là gì?",
            answers: ["Phẫu thuật cắt tuyến giáp", "Điều trị levothyroxine để thu nhỏ bướu", "Sử dụng iod phóng xạ", "Chỉ theo dõi định kỳ"],
            correct: 0
        },
        {
            question: "Một bệnh nhân nam 70 tuổi, có ung thư tuyến giáp thể nhú, đã cắt tuyến giáp và điều trị iod phóng xạ. Xét nghiệm TSH của bệnh nhân duy trì ở mức 8 mIU/L. Bước tiếp theo là gì?",
            answers: ["Tăng liều levothyroxine để giảm TSH xuống mức mong muốn", "Giảm liều levothyroxine", "Bắt đầu điều trị hóa trị", "Ngừng theo dõi vì bệnh đã ổn định"],
            correct: 0
        }
    ],
    "GAN MẬT": [
        {
            question: "Ung thư biểu mô tế bào gan (Hepatocellular Carcinoma - HCC) phát sinh từ loại tế bào nào?",
            answers: ["Tế bào Kupffer", "Tế bào gan", "Tế bào nội mô", "Tế bào ống mật"],
            correct: 1
        },
        {
            question: "Đặc điểm mô bệnh học nổi bật của ung thư đường mật trong gan (iCCA) là gì?",
            answers: ["Không có nền mô đệm xơ hóa", "Xuất hiện nhiều tế bào viêm lympho", "Mô đệm xơ hóa (desmoplastic stroma) và tính chất xâm lấn mạnh", "Có cấu trúc dạng bè (trabecular pattern)"],
            correct: 2
        },
        {
            question: "Loại khối u nguyên phát nào của gan thường gặp nhất?",
            answers: ["Ung thư biểu mô tế bào gan (HCC)", "Ung thư đường mật trong gan (iCCA)", "U nguyên bào gan", "Ung thư mạch máu"],
            correct: 0
        },
        {
            question: "Loại khối u nào có nguy cơ xuất hiện ở trẻ em dưới 3 tuổi?",
            answers: ["HCC", "iCCA", "U nguyên bào gan (Hepatoblastoma)", "Ung thư mạch máu"],
            correct: 2
        },
        {
            question: "Ung thư gan nguyên phát phổ biến thứ mấy trên thế giới?",
            answers: ["Thứ 3", "Thứ 6", "Thứ 10", "Thứ 15"],
            correct: 1
        },
        {
            question: "Yếu tố nguy cơ nào quan trọng nhất đối với HCC?",
            answers: ["Tiêu thụ thực phẩm chứa nitrosamine", "Viêm gan virus (HBV, HCV)", "Hút thuốc lá", "Phơi nhiễm phóng xạ"],
            correct: 1
        },
        {
            question: "Yếu tố nào không phải là nguy cơ của iCCA?",
            answers: ["Viêm đường mật xơ cứng nguyên phát", "Nhiễm sán lá gan", "Hội chứng Lynch", "Bệnh sỏi mật trong gan"],
            correct: 2
        },
        {
            question: "Đột biến TP53 thường gặp trong loại ung thư nào của gan?",
            answers: ["HCC", "iCCA", "U tuyến gan", "U nội mô mạch máu dạng biểu mô"],
            correct: 0
        },
        {
            question: "Loại ung thư nào có sự hợp nhất FGFR2?",
            answers: ["HCC", "iCCA", "U mạch máu gan", "U tuyến gan"],
            correct: 1
        },
        {
            question: "Triệu chứng phổ biến nhất của iCCA là gì?",
            answers: ["Sốt cao", "Đau bụng vùng hạ sườn phải", "Chướng bụng cấp tính", "Xuất huyết tiêu hóa"],
            correct: 1
        },
        {
            question: "Dấu hiệu nào thường gặp ở HCC giai đoạn muộn?",
            answers: ["Thiếu máu nặng", "Vàng da", "Viêm tụy cấp", "Tăng huyết áp"],
            correct: 1
        },
        {
            question: "Xét nghiệm nào được sử dụng phổ biến nhất để theo dõi HCC?",
            answers: ["CA19-9", "CEA", "AFP", "CK7"],
            correct: 2
        },
        {
            question: "Kỹ thuật hình ảnh nào giúp phân biệt rõ ràng iCCA với HCC?",
            answers: ["Siêu âm", "CT có cản quang", "X-quang bụng", "PET-CT"],
            correct: 1
        },
        {
            question: "Phương pháp điều trị triệt căn cho HCC giai đoạn sớm là gì?",
            answers: ["Ghép gan", "Hóa trị", "Xạ trị", "Liệu pháp miễn dịch"],
            correct: 0
        },
        {
            question: "Phác đồ hóa trị tiêu chuẩn cho iCCA giai đoạn muộn là gì?",
            answers: ["FOLFIRINOX", "Gemcitabine + Cisplatin", "Sorafenib", "Bevacizumab"],
            correct: 1
        },
        {
            question: "Thuốc nào là một chất ức chế FGFR2 dùng để điều trị iCCA?",
            answers: ["Sorafenib", "Lenvatinib", "Pemigatinib", "Regorafenib"],
            correct: 2
        },
        {
            question: "Tiên lượng của HCC xấu nhất khi nào?",
            answers: ["Khi có huyết khối tĩnh mạch cửa", "Khi u còn nhỏ nhưng chưa điều trị", "Khi không có triệu chứng", "Khi chỉ có một khối u đơn độc"],
            correct: 0
        },
        {
            question: "Tỷ lệ sống sau 5 năm của HCC giai đoạn muộn là bao nhiêu?",
            answers: ["50%", "30%", "10%", "Dưới 5%"],
            correct: 3
        },
        {
            question: "Liệu pháp miễn dịch nào đã chứng minh hiệu quả trong điều trị HCC tiến triển?",
            answers: ["Atezolizumab + Bevacizumab", "Erlotinib", "Cetuximab", "Rituximab"],
            correct: 0
        },
        {
            question: "Kỹ thuật chẩn đoán nào đang được nghiên cứu để phát hiện HCC sớm?",
            answers: ["Xét nghiệm sinh học lỏng (liquid biopsy)", "Điện tim", "Chụp CT không cản quang", "Đo tốc độ máu tĩnh mạch cửa"],
            correct: 0
        },
        {
            question: "Yếu tố nào không phải là nguy cơ của HCC?",
            answers: ["Viêm gan B", "Viêm gan C", "Tăng huyết áp", "Xơ gan"],
            correct: 2
        },
        {
            question: "Aflatoxin có liên quan đến ung thư nào?",
            answers: ["Ung thư phổi", "Ung thư biểu mô tế bào gan (HCC)", "Ung thư dạ dày", "Ung thư tụy"],
            correct: 1
        },
        {
            question: "Bệnh lý nào có liên quan mật thiết đến sự phát triển của iCCA?",
            answers: ["Viêm gan do rượu", "Viêm đường mật xơ cứng nguyên phát", "Bệnh Crohn", "Loét dạ dày tá tràng"],
            correct: 1
        },
        {
            question: "Dấu hiệu hình ảnh điển hình của HCC trên CT tăng cường tương phản là gì?",
            answers: ["Tăng sinh mạch máu thì động mạch và rửa trôi muộn", "Hình ảnh đóng vôi dạng vòng", "Giảm tín hiệu trên T2W MRI", "Tăng tín hiệu trên T1W MRI không cản quang"],
            correct: 0
        },
        {
            question: "Kỹ thuật nào giúp phân biệt iCCA với các khối u gan khác?",
            answers: ["Siêu âm Doppler", "MRI với chuỗi xung khuếch tán (DWI)", "Chụp mạch máu gan", "Chụp X-quang bụng"],
            correct: 1
        },
        {
            question: "Đột biến nào phổ biến trong iCCA và là đích của liệu pháp nhắm mục tiêu?",
            answers: ["TP53", "IDH1", "BRAF", "ALK"],
            correct: 1
        },
        {
            question: "Đột biến nào liên quan đến con đường Wnt/β-catenin trong HCC?",
            answers: ["CTNNB1", "KRAS", "EGFR", "FGFR2"],
            correct: 0
        },
        {
            question: "HCC thường di căn đến đâu?",
            answers: ["Não", "Phổi", "Xương", "Tất cả các đáp án trên"],
            correct: 3
        },
        {
            question: "Biểu hiện nào của HCC có tiên lượng xấu nhất?",
            answers: ["Xâm lấn tĩnh mạch cửa", "Một khối u đơn độc <3 cm", "Không có triệu chứng", "Không tăng AFP"],
            correct: 0
        },
        {
            question: "Tiêu chí Milan cho ghép gan trong HCC bao gồm?",
            answers: ["Một khối u ≤5 cm hoặc ≤3 khối u ≤3 cm", "Bất kỳ kích thước nào miễn không có di căn", "Một khối u ≤10 cm", "Không giới hạn số lượng và kích thước khối u"],
            correct: 0
        },
        {
            question: "Thuốc nhắm trúng đích đầu tiên được chấp thuận cho HCC là?",
            answers: ["Sorafenib", "Lenvatinib", "Regorafenib", "Nivolumab"],
            correct: 0
        },
        {
            question: "Phẫu thuật cắt bỏ iCCA chỉ có lợi khi nào?",
            answers: ["Khi không có xâm lấn mạch máu lớn", "Khi có di căn xa", "Khi khối u lớn hơn 10 cm", "Khi khối u có hơn 3 vị trí"],
            correct: 0
        },
        {
            question: "Thuốc nhắm trúng đích nào dành cho iCCA có đột biến IDH1?",
            answers: ["Ivosidenib", "Erlotinib", "Gefitinib", "Bevacizumab"],
            correct: 0
        },
        {
            question: "Bệnh nhân iCCA có tiên lượng xấu nhất khi nào?",
            answers: ["Có hợp nhất FGFR2", "Có xâm lấn thần kinh và mạch máu", "Phát hiện sớm, có thể phẫu thuật", "Không tăng CA19-9"],
            correct: 1
        },
        {
            question: "Tỷ lệ sống sau 5 năm của iCCA giai đoạn muộn là?",
            answers: [">50%", "30-40%", "10-20%", "<10%"],
            correct: 3
        },
        {
            question: "Kỹ thuật nào có thể giúp phát hiện sớm HCC?",
            answers: ["Sinh thiết dịch mật", "Liquid biopsy (sinh thiết lỏng)", "Định lượng bilirubin", "Xét nghiệm đường huyết"],
            correct: 1
        },
        {
            question: "Cơ chế chính của liệu pháp miễn dịch trong điều trị HCC là gì?",
            answers: ["Ức chế PD-1/PD-L1", "Hoạt hóa KRAS", "Ức chế mTOR", "Ức chế HER2"],
            correct: 0
        },
        {
            question: "Bệnh nhân 60 tuổi, có tiền sử viêm gan C, phát hiện khối u gan 5 cm, AFP tăng cao, lựa chọn điều trị thích hợp là?",
            answers: ["Ghép gan", "Theo dõi", "Xạ trị", "Điều trị miễn dịch"],
            correct: 0
        },
        {
            question: "Bệnh nhân nữ 55 tuổi, vàng da và sụt cân, khối u gan trái 6 cm, xét nghiệm cho thấy hợp nhất FGFR2. Lựa chọn điều trị phù hợp là?",
            answers: ["Cắt bỏ khối u", "Điều trị bằng FGFR2 inhibitor", "Hóa trị đơn thuần", "Chăm sóc giảm nhẹ"],
            correct: 1
        },
        {
            question: "Cải thiện tiên lượng HCC cần tập trung vào?",
            answers: ["Phát hiện sớm và điều trị cá nhân hóa", "Điều trị xạ trị sớm", "Hóa trị đơn thuần", "Giảm cân nhanh"],
            correct: 0
        },
        {
            question: "Xét nghiệm nào thường được sử dụng để phát hiện ung thư đường mật trong gan (iCCA)?",
            answers: ["AFP", "CA19-9", "CEA", "NSE"],
            correct: 1
        },
        {
            question: "Đặc điểm nào sau đây giúp phân biệt iCCA với HCC trên MRI?",
            answers: ["HCC có tăng tín hiệu trên T2W", "iCCA có tăng tín hiệu trên T1W", "iCCA có rửa trôi muộn trên thì tĩnh mạch cửa", "HCC không ngấm thuốc cản quang ở thì động mạch"],
            correct: 2
        },
        {
            question: "Sinh thiết gan trong HCC thường được chỉ định khi nào?",
            answers: ["Tất cả bệnh nhân nghi ngờ HCC", "Khi không có đặc điểm điển hình trên hình ảnh học", "Khi AFP tăng cao", "Khi bệnh nhân có xơ gan"],
            correct: 1
        },
        {
            question: "Đâu là triệu chứng lâm sàng phổ biến của HCC giai đoạn muộn?",
            answers: ["Tăng cân", "Giảm cân, đau hạ sườn phải, vàng da", "Phân có máu", "Đau bụng quanh rốn"],
            correct: 1
        },
        {
            question: "Bệnh nhân nghi ngờ HCC nhưng AFP bình thường, xét nghiệm nào có thể hỗ trợ chẩn đoán?",
            answers: ["PIVKA-II (DCP)", "LDH", "CEA", "NSE"],
            correct: 0
        },
        {
            question: "Khi nào cắt gan là lựa chọn phù hợp nhất trong điều trị HCC?",
            answers: ["Bệnh nhân có xơ gan mất bù", "Bệnh nhân có một khối u đơn độc, chức năng gan tốt", "Bệnh nhân có nhiều khối u rải rác", "Bệnh nhân có huyết khối tĩnh mạch cửa"],
            correct: 1
        },
        {
            question: "Ghép gan là phương pháp tối ưu cho bệnh nhân HCC khi?",
            answers: ["Có một khối u >10 cm", "Có một khối u ≤5 cm hoặc ≤3 khối u, mỗi khối ≤3 cm (Tiêu chí Milan)", "Có di căn xa", "Chỉ khi AFP tăng cao"],
            correct: 1
        },
        {
            question: "Xạ trị đóng vai trò gì trong điều trị HCC?",
            answers: ["Là phương pháp điều trị đầu tay", "Được sử dụng chủ yếu cho HCC không thể phẫu thuật", "Không có vai trò trong HCC", "Chỉ dùng cho bệnh nhân giai đoạn sớm"],
            correct: 1
        },
        {
            question: "Liệu pháp miễn dịch nào đã chứng minh hiệu quả cho HCC?",
            answers: ["Atezolizumab + Bevacizumab", "Erlotinib", "Trastuzumab", "Rituximab"],
            correct: 0
        },
        {
            question: "Phương pháp điều trị iCCA giai đoạn muộn phổ biến nhất hiện nay là gì?",
            answers: ["Phẫu thuật triệt căn", "Ghép gan", "Hóa trị toàn thân với gemcitabine + cisplatin", "Xạ trị"],
            correct: 2
        },
        {
            question: "HCC thường di căn đến cơ quan nào nhất?",
            answers: ["Xương", "Phổi", "Não", "Ruột"],
            correct: 1
        },
        {
            question: "iCCA có tiên lượng xấu nhất khi nào?",
            answers: ["Khi phát hiện sớm", "Khi có xâm lấn thần kinh và mạch máu", "Khi khối u nhỏ hơn 3 cm", "Khi CA19-9 bình thường"],
            correct: 1
        },
        {
            question: "Tỷ lệ sống sau 5 năm của HCC nếu không điều trị là bao nhiêu?",
            answers: ["50%", "30%", "10%", "<5%"],
            correct: 3
        },
        {
            question: "Chỉ số nào có thể tiên lượng nguy cơ tái phát sau phẫu thuật iCCA?",
            answers: ["CA19-9", "AFP", "NSE", "CEA"],
            correct: 0
        },
        {
            question: "Xét nghiệm nào sau đây đang được nghiên cứu để phát hiện sớm HCC?",
            answers: ["Chụp CT không cản quang", "Liquid biopsy (sinh thiết lỏng)", "Định lượng glucose", "Định lượng bilirubin"],
            correct: 1
        },
        {
            question: "Thuốc nào là chất ức chế FGFR2 được dùng cho iCCA?",
            answers: ["Sorafenib", "Pemigatinib", "Gefitinib", "Bevacizumab"],
            correct: 1
        },
        {
            question: "Phương pháp nào đang được nghiên cứu để cải thiện điều trị iCCA?",
            answers: ["Xạ trị toàn thân", "Liệu pháp miễn dịch kết hợp với thuốc nhắm trúng đích", "Chỉ dùng hóa trị đơn thuần", "Cắt bỏ toàn bộ gan"],
            correct: 1
        },
        {
            question: "Chất nào đóng vai trò trong cơ chế miễn dịch của HCC?",
            answers: ["PD-1/PD-L1", "HER2", "EGFR", "BRCA1"],
            correct: 0
        },
        {
            question: "Trong các thử nghiệm lâm sàng, phương pháp nào cho thấy tiềm năng giúp cải thiện tiên lượng HCC?",
            answers: ["Phẫu thuật cắt bỏ tất cả bệnh nhân", "Liệu pháp miễn dịch kết hợp với thuốc nhắm trúng đích", "Điều trị nội khoa không cần theo dõi", "Điều trị bằng hóa trị đơn thuần"],
            correct: 1
        },
        {
            question: "Điều nào là mục tiêu tương lai trong điều trị HCC?",
            answers: ["Phát triển các biomarker phát hiện sớm", "Loại bỏ hoàn toàn phẫu thuật trong điều trị", "Chỉ dùng hóa trị đơn thuần", "Giảm cân cấp tốc để ngăn ngừa HCC"],
            correct: 0
        }
    ],
    "ĐẠI TRỰC TRÀNG": [
        {
            question: "Ung thư đại trực tràng (CRC) là loại ung thư phổ biến thứ mấy trên thế giới?",
            answers: ["Thứ nhất", "Thứ hai", "Thứ ba", "Thứ tư"],
            correct: 2
        },
        {
            question: "Yếu tố nào không phải là nguy cơ chính của CRC?",
            answers: ["Tiền sử gia đình có CRC", "Chế độ ăn nhiều chất xơ", "Hội chứng Lynch", "Polyp tuyến đại tràng"],
            correct: 1
        },
        {
            question: "Tỷ lệ mắc CRC có xu hướng gia tăng ở nhóm tuổi nào?",
            answers: ["Người trên 50 tuổi", "Trẻ em dưới 10 tuổi", "Thanh niên dưới 50 tuổi", "Người cao tuổi trên 80 tuổi"],
            correct: 2
        },
        {
            question: "Yếu tố môi trường nào có liên quan đến CRC?",
            answers: ["Chế độ ăn nhiều thịt đỏ", "Ít vận động", "Hút thuốc lá", "Cả ba đáp án trên"],
            correct: 3
        },
        {
            question: "Hội chứng đa polyp tuyến gia đình (FAP) có liên quan đến gen nào?",
            answers: ["TP53", "APC", "KRAS", "BRAF"],
            correct: 1
        },
        {
            question: "Loại ung thư nào chiếm >95% các trường hợp CRC?",
            answers: ["Ung thư tế bào gai", "Ung thư tuyến (Adenocarcinoma)", "U mô đệm đường tiêu hóa (GIST)", "Lymphôm đại tràng"],
            correct: 1
        },
        {
            question: "U nào sau đây KHÔNG phải là polyp tiền ung thư?",
            answers: ["U tuyến ống (Tubular adenoma)", "Polyp tăng sản (Hyperplastic polyp)", "U tuyến nhú (Villous adenoma)", "U tuyến răng cưa truyền thống (TSA)"],
            correct: 1
        },
        {
            question: "Loại polyp nào có nguy cơ cao nhất tiến triển thành ung thư?",
            answers: ["U tuyến nhú", "U tuyến ống", "Polyp tăng sản", "Polyp viêm"],
            correct: 0
        },
        {
            question: "Ung thư biểu mô nhầy (Mucinous Adenocarcinoma) chiếm khoảng bao nhiêu % CRC?",
            answers: ["1–5%", "10–15%", "20–30%", ">50%"],
            correct: 1
        },
        {
            question: "Dạng ung thư nào của đại tràng có tiên lượng xấu nhất?",
            answers: ["Adenocarcinoma biệt hóa tốt", "Ung thư biểu mô nhầy", "Ung thư tế bào nhẫn (Signet-Ring Cell Carcinoma)", "Ung thư tuyến biệt hóa trung bình"],
            correct: 2
        },
        {
            question: "Đột biến nào liên quan đến tín hiệu Wnt trong CRC?",
            answers: ["APC", "TP53", "BRAF", "NRAS"],
            correct: 0
        },
        {
            question: "Ung thư đại tràng do hội chứng Lynch có đặc điểm nào?",
            answers: ["Không có bất ổn vi vệ tinh (MSI)", "Liên quan đến đột biến MMR (MLH1, MSH2, MSH6, PMS2)", "Luôn có đột biến TP53", "Phát triển chủ yếu từ polyp tăng sản"],
            correct: 1
        },
        {
            question: "Đột biến KRAS thường gặp trong CRC ảnh hưởng đến con đường tín hiệu nào?",
            answers: ["MAPK", "Wnt", "TGF-β", "PI3K/AKT"],
            correct: 0
        },
        {
            question: "Tiêu chuẩn vàng trong chẩn đoán CRC là gì?",
            answers: ["Siêu âm bụng", "Nội soi đại tràng", "Chụp CT Scan", "MRI bụng"],
            correct: 1
        },
        {
            question: "Marker nào được dùng để theo dõi CRC sau điều trị?",
            answers: ["AFP", "CEA", "CA-125", "PSA"],
            correct: 1
        },
        {
            question: "Phương pháp điều trị chính cho CRC giai đoạn sớm (I-II) là gì?",
            answers: ["Hóa trị", "Phẫu thuật", "Xạ trị", "Liệu pháp miễn dịch"],
            correct: 1
        },
        {
            question: "Xạ trị thường được sử dụng trong loại ung thư nào của đại trực tràng?",
            answers: ["Ung thư đại tràng phải", "Ung thư trực tràng", "Ung thư đại tràng ngang", "Ung thư đại tràng sigma"],
            correct: 1
        },
        {
            question: "Phác đồ hóa trị phổ biến nhất cho CRC giai đoạn tiến triển là gì?",
            answers: ["CHOP", "XELOX", "FOLFOX", "ABVD"],
            correct: 2
        },
        {
            question: "Điều trị nhắm trúng đích EGFR KHÔNG hiệu quả trên bệnh nhân có đột biến nào?",
            answers: ["TP53", "KRAS", "MMR", "PTEN"],
            correct: 1
        },
        {
            question: "MSI-H trong CRC gợi ý liệu pháp điều trị nào?",
            answers: ["Hóa trị", "Xạ trị", "Miễn dịch PD-1", "Phẫu thuật đơn thuần"],
            correct: 2
        },
        {
            question: "Giai đoạn T3 trong hệ thống TNM của CRC có nghĩa là gì?",
            answers: ["U xâm lấn lớp cơ", "U xâm lấn mô mỡ quanh đại tràng/trực tràng", "U giới hạn trong niêm mạc", "U xâm lấn cơ quan lân cận"],
            correct: 1
        },
        {
            question: "N1 trong hệ thống TNM của CRC có nghĩa là gì?",
            answers: ["Không có di căn hạch", "Di căn 1–3 hạch bạch huyết vùng", "Di căn ≥4 hạch bạch huyết vùng", "Di căn xa"],
            correct: 1
        },
        {
            question: "M1b trong TNM của CRC ám chỉ điều gì?",
            answers: ["Không có di căn xa", "Di căn phúc mạc", "Di căn ngoài phúc mạc (gan, phổi)", "Di căn hạch vùng"],
            correct: 2
        },
        {
            question: "CRC giai đoạn IV có đặc điểm nào?",
            answers: ["Khối u khu trú trong niêm mạc", "Xâm lấn cơ quan lân cận nhưng không di căn", "Di căn xa", "Chỉ xâm lấn hạch bạch huyết"],
            correct: 2
        },
        {
            question: "Polyp nào có nguy cơ cao nhất phát triển thành ung thư đại trực tràng?",
            answers: ["Polyp tăng sản", "Polyp viêm", "U tuyến nhú (Villous adenoma)", "Polyp hamartoma"],
            correct: 2
        },
        {
            question: "Hội chứng Lynch liên quan đến loại tổn thương nào?",
            answers: ["Polyp tăng sản", "Polyp dạng răng cưa", "Polyp viêm", "U tuyến đại tràng"],
            correct: 3
        },
        {
            question: "Polyp nào thường không tiến triển thành CRC?",
            answers: ["U tuyến nhú", "Polyp dạng răng cưa không cuống", "Polyp tăng sản", "U tuyến ống"],
            correct: 2
        },
        {
            question: "Con đường sinh học chính của CRC là gì?",
            answers: ["Con đường Wnt/APC", "Con đường RAS/MAPK", "Con đường PI3K/AKT", "Cả ba con đường trên"],
            correct: 3
        },
        {
            question: "Đột biến BRAF V600E trong CRC có liên quan đến đặc điểm nào?",
            answers: ["Tiên lượng tốt", "Xuất hiện ở CRC phát triển từ polyp dạng răng cưa", "Tăng đáp ứng với liệu pháp EGFR", "Ít gặp trong CRC"],
            correct: 1
        },
        {
            question: "CRC có bất ổn vi vệ tinh cao (MSI-H) có đặc điểm gì?",
            answers: ["Đáp ứng tốt với liệu pháp miễn dịch", "Tiên lượng xấu hơn dạng ổn định vi vệ tinh (MSS)", "Không liên quan đến hội chứng Lynch", "Ít đột biến gen MMR"],
            correct: 0
        },
        {
            question: "Xét nghiệm nào KHÔNG thường dùng để phát hiện CRC?",
            answers: ["Nội soi đại tràng", "MRI não", "CEA huyết thanh", "Chụp CT"],
            correct: 1
        },
        {
            question: "Xét nghiệm nào giúp xác định hội chứng Lynch?",
            answers: ["CEA", "MSI/IHC đánh giá mất MMR", "AFP", "CA19-9"],
            correct: 1
        },
        {
            question: "Khi nào hóa trị được chỉ định trong CRC?",
            answers: ["Luôn luôn cần thiết", "Chỉ dùng ở giai đoạn I", "Khi có di căn hạch (N+)", "Chỉ dùng sau phẫu thuật"],
            correct: 2
        },
        {
            question: "Phác đồ hóa trị nào phổ biến trong CRC?",
            answers: ["FOLFOX", "CHOP", "R-CHOP", "BEP"],
            correct: 0
        },
        {
            question: "Liệu pháp nhắm EGFR KHÔNG hiệu quả trên bệnh nhân nào?",
            answers: ["Đột biến KRAS", "Đột biến MMR", "MSI-H", "Không có đột biến"],
            correct: 0
        },
        {
            question: "Loại phẫu thuật nào được áp dụng cho CRC giai đoạn sớm?",
            answers: ["Polypectomy", "Right hemicolectomy", "Phẫu thuật giảm nhẹ", "Nội soi ổ bụng"],
            correct: 0
        },
        {
            question: "Yếu tố nào ảnh hưởng lớn nhất đến tiên lượng của CRC?",
            answers: ["Giai đoạn TNM", "Đột biến KRAS", "Độ tuổi bệnh nhân", "Mức độ CEA"],
            correct: 0
        },
        {
            question: "CRC có MSI-H có tiên lượng như thế nào?",
            answers: ["Tốt hơn CRC có MSS", "Xấu hơn CRC có MSS", "Không ảnh hưởng đến tiên lượng", "Chỉ gặp ở người trẻ"],
            correct: 0
        },
        {
            question: "CRC giai đoạn IV có tỷ lệ sống sau 5 năm khoảng bao nhiêu?",
            answers: ["90%", "70%", "30%", "<15%"],
            correct: 3
        },
        {
            question: "Polyp nào có khả năng tiến triển thành CRC cao nhất?",
            answers: ["U tuyến nhú (Villous adenoma)", "Polyp viêm", "Polyp tăng sản", "Polyp Peutz-Jeghers"],
            correct: 0
        },
        {
            question: "CRC phát triển theo con đường nào phổ biến nhất?",
            answers: ["Con đường bất ổn nhiễm sắc thể (CIN)", "Con đường bất ổn vi vệ tinh (MSI)", "Con đường methyl hóa CpG (CIMP)", "Con đường không liên quan đến polyp"],
            correct: 0
        },
        {
            question: "Hội chứng đa polyp tuyến gia đình (FAP) liên quan đến gen nào?",
            answers: ["MSH2", "APC", "BRAF", "PTEN"],
            correct: 1
        },
        {
            question: "CRC có MSI-H có liên quan đến hội chứng nào?",
            answers: ["Hội chứng Peutz-Jeghers", "Hội chứng Lynch", "Hội chứng Gardner", "Hội chứng Turcot"],
            correct: 1
        },
        {
            question: "Tổn thương tiền ung thư phổ biến nhất trong CRC là gì?",
            answers: ["U tuyến đại tràng (Adenoma)", "Polyp tăng sản", "Polyp viêm", "Polyp hamartoma"],
            correct: 0
        },
        {
            question: "Triệu chứng nào thường gặp nhất trong CRC giai đoạn sớm?",
            answers: ["Đau bụng quặn từng cơn", "Thiếu máu thiếu sắt không rõ nguyên nhân", "Sốt kéo dài", "Chán ăn đột ngột"],
            correct: 1
        },
        {
            question: "CRC bên phải thường có triệu chứng nào?",
            answers: ["Táo bón và tắc ruột", "Đi ngoài ra máu đỏ tươi", "Thiếu máu mạn tính", "Tiêu chảy cấp"],
            correct: 2
        },
        {
            question: "CRC bên trái thường có triệu chứng nào?",
            answers: ["Thiếu máu mạn tính", "Thay đổi thói quen đại tiện và hẹp lòng ruột", "Buồn nôn và nôn", "Sụt cân nhanh"],
            correct: 1
        },
        {
            question: "Ung thư trực tràng thường có biểu hiện gì?",
            answers: ["Đi ngoài phân nhầy máu", "Đau quặn bụng trên rốn", "Tiêu chảy cấp", "Thiếu máu tan máu"],
            correct: 0
        },
        {
            question: "Phương pháp chẩn đoán nào được xem là tiêu chuẩn vàng cho CRC?",
            answers: ["CT Scan", "Nội soi đại tràng", "Siêu âm bụng", "PET-CT"],
            correct: 1
        },
        {
            question: "Nội soi đại tràng có thể giúp phát hiện gì trong CRC?",
            answers: ["Polyp tiền ung thư", "Mức độ xâm lấn của khối u", "Di căn xa", "Tất cả đáp án trên"],
            correct: 0
        },
        {
            question: "MRI thường được sử dụng trong đánh giá ung thư nào?",
            answers: ["Ung thư đại tràng ngang", "Ung thư trực tràng", "Ung thư đại tràng sigma", "Ung thư đại tràng phải"],
            correct: 1
        },
        {
            question: "CT Scan có vai trò gì trong chẩn đoán CRC?",
            answers: ["Đánh giá di căn", "Xác định giai đoạn bệnh", "Phát hiện khối u lớn", "Cả ba đáp án trên"],
            correct: 3
        },
        {
            question: "Marker CEA được sử dụng để làm gì trong CRC?",
            answers: ["Chẩn đoán sớm CRC", "Theo dõi tái phát sau điều trị", "Phát hiện hội chứng Lynch", "Đánh giá viêm ruột"],
            correct: 1
        },
        {
            question: "Biomarker nào có thể chỉ điểm CRC có MSI-H?",
            answers: ["KRAS", "MLH1, MSH2", "CEA", "CA 19-9"],
            correct: 1
        },
        {
            question: "Khi nào CRC cần hóa trị bổ trợ?",
            answers: ["Chỉ trong giai đoạn IV", "Khi có di căn hạch (N+)", "Khi khối u T1", "Khi CRC biệt hóa tốt"],
            correct: 1
        },
        {
            question: "Điều trị nào được khuyến cáo cho CRC giai đoạn I?",
            answers: ["Phẫu thuật đơn thuần", "Hóa trị FOLFOX", "Xạ trị", "Liệu pháp miễn dịch"],
            correct: 0
        },
        {
            question: "Xạ trị thường được sử dụng trong loại ung thư nào?",
            answers: ["Ung thư đại tràng phải", "Ung thư trực tràng", "Ung thư đại tràng ngang", "Ung thư đại tràng sigma"],
            correct: 1
        },
        {
            question: "Thuốc nhắm trúng đích EGFR được sử dụng trong CRC nào?",
            answers: ["CRC có đột biến KRAS", "CRC có MSI-H", "CRC không có đột biến KRAS", "CRC giai đoạn I"],
            correct: 2
        },
        {
            question: "Yếu tố nào ảnh hưởng nhiều nhất đến tiên lượng CRC?",
            answers: ["Đột biến KRAS", "Giai đoạn TNM", "Tuổi bệnh nhân", "Độ biệt hóa của khối u"],
            correct: 1
        },
        {
            question: "CRC giai đoạn IV có tỷ lệ sống sau 5 năm khoảng bao nhiêu?",
            answers: ["50%", "30%", "15%", "<10%"],
            correct: 3
        }
    ],
    "U RUỘT NON": [
        {
            question: "Khối u ruột non được chia thành hai nhóm chính nào?",
            answers: ["Ác tính và tiền ác tính", "Lành tính và ác tính", "Nguy hiểm và không nguy hiểm", "Nội tiết và không nội tiết"],
            correct: 1
        },
        {
            question: "Loại u ác tính phổ biến nhất của ruột non là gì?",
            answers: ["Lymphoma", "Gastrointestinal stromal tumor (GIST)", "Adenocarcinoma", "U thần kinh nội tiết (NETs)"],
            correct: 2
        },
        {
            question: "U thần kinh nội tiết (NETs) thường xuất phát từ đâu?",
            answers: ["Tá tràng", "Hỗng tràng", "Hồi tràng", "Manh tràng"],
            correct: 2
        },
        {
            question: "GIST có đặc điểm phân tử nổi bật nào?",
            answers: ["Đột biến TP53", "Đột biến KIT hoặc PDGFRA", "Methyl hóa DNA bất thường", "Đột biến KRAS"],
            correct: 1
        },
        {
            question: "Khối u ruột non chiếm bao nhiêu phần trăm trong tổng số các ung thư đường tiêu hóa?",
            answers: ["<1%", "2–3%", "<5%", "10–15%"],
            correct: 2
        },
        {
            question: "NETs có tỷ lệ mắc cao hơn ở khu vực nào?",
            answers: ["Đông Nam Á", "Châu Phi", "Châu Mỹ và Châu Âu", "Trung Đông"],
            correct: 2
        },
        {
            question: "Độ tuổi trung bình chẩn đoán GIST là bao nhiêu?",
            answers: ["40 tuổi", "50 tuổi", "60 tuổi", "70 tuổi"],
            correct: 2
        },
        {
            question: "Ở châu Á, loại khối u nào của ruột non có tỷ lệ mắc cao hơn so với phương Tây?",
            answers: ["NETs", "Lymphoma", "GIST", "Adenocarcinoma"],
            correct: 2
        },
        {
            question: "Đặc điểm mô học chính của adenocarcinoma ruột non là gì?",
            answers: ["Tế bào hình thoi", "Tăng trưởng theo mô hình bè (trabecular growth)", "Cấu trúc tuyến loạn sản", "Bắt màu CD117"],
            correct: 2
        },
        {
            question: "GIST thường dương tính với dấu ấn nào trong mô bệnh học?",
            answers: ["Synaptophysin", "Chromogranin A", "CD117 (c-KIT)", "TP53"],
            correct: 2
        },
        {
            question: "NETs độ thấp (G1) có đặc điểm nào?",
            answers: ["Chỉ số phân bào cao", "Nhân tròn, nhiễm sắc chất dạng \"muối tiêu\"", "Xâm lấn mạnh vào mạch máu", "Biểu hiện mạnh TP53"],
            correct: 1
        },
        {
            question: "Đột biến KRAS phổ biến nhất trong loại khối u nào của ruột non?",
            answers: ["NETs", "Lymphoma", "Adenocarcinoma", "GIST"],
            correct: 2
        },
        {
            question: "Đột biến KIT exon nào có tiên lượng đáp ứng tốt với imatinib?",
            answers: ["Exon 9", "Exon 11", "Exon 17", "Exon 18"],
            correct: 1
        },
        {
            question: "Triệu chứng phổ biến nhất của khối u ruột non là gì?",
            answers: ["Sốt kéo dài", "Đau bụng", "Vàng da", "Táo bón"],
            correct: 1
        },
        {
            question: "Hội chứng carcinoid liên quan đến loại khối u nào?",
            answers: ["Adenocarcinoma", "GIST", "NETs", "Lymphoma"],
            correct: 2
        },
        {
            question: "Phương pháp hình ảnh chính để đánh giá khối u ruột non là gì?",
            answers: ["Siêu âm bụng", "Chụp cắt lớp vi tính (CT)", "X-quang bụng", "Chụp PET-CT"],
            correct: 1
        },
        {
            question: "Tỷ lệ sống sau 5 năm của bệnh nhân adenocarcinoma ruột non giai đoạn muộn là khoảng bao nhiêu?",
            answers: ["5-10%", "20-30%", "40-50%", "60-70%"],
            correct: 1
        },
        {
            question: "Điều trị chính cho GIST là gì?",
            answers: ["Hóa trị", "Phẫu thuật kết hợp imatinib", "Xạ trị", "Nội soi cắt bỏ"],
            correct: 1
        },
        {
            question: "Nội soi viên nang được sử dụng để phát hiện tổn thương ở vị trí nào của ruột non?",
            answers: ["Tá tràng", "Hỗng tràng và hồi tràng", "Manh tràng", "Đại tràng sigma"],
            correct: 1
        },
        {
            question: "Đâu là dấu ấn miễn dịch đặc trưng của GIST?",
            answers: ["Chromogranin A", "Synaptophysin", "CD117 (c-KIT) và DOG1", "CA19-9"],
            correct: 2
        },
        {
            question: "Chụp PET-CT với Gallium-68 được dùng để chẩn đoán loại khối u nào của ruột non?",
            answers: ["Adenocarcinoma", "GIST", "NETs", "Lymphoma"],
            correct: 2
        },
        {
            question: "Đột biến KIT exon 9 của GISTs yêu cầu điều trị bằng imatinib với liều nào?",
            answers: ["200 mg/ngày", "400 mg/ngày", "800 mg/ngày", "1000 mg/ngày"],
            correct: 2
        },
        {
            question: "Hệ thống nào được sử dụng để phân giai đoạn khối u ruột non?",
            answers: ["TNM", "FIGO", "RAI", "Gleason"],
            correct: 0
        },
        {
            question: "Yếu tố nào dưới đây ảnh hưởng mạnh đến tiên lượng của GIST?",
            answers: ["Độ biệt hóa mô bệnh học", "Chỉ số phân bào và kích thước khối u", "Tuổi bệnh nhân", "Số lượng lympho bào trong u"],
            correct: 1
        },
        {
            question: "Đâu là yếu tố tiên lượng xấu trong adenocarcinoma ruột non?",
            answers: ["Phát hiện sớm, chưa xâm lấn", "Độ biệt hóa tốt", "Xâm lấn hạch bạch huyết và di căn xa", "Không có đột biến KRAS"],
            correct: 2
        },
        {
            question: "NETs có tiên lượng tốt hơn so với adenocarcinoma ruột non khi nào?",
            answers: ["Khi chúng có biệt hóa kém", "Khi có di căn xa", "Khi có tốc độ phát triển chậm và biệt hóa tốt", "Khi chỉ số phân bào cao"],
            correct: 2
        },
        {
            question: "Điều trị hàng đầu cho adenocarcinoma ruột non khu trú là gì?",
            answers: ["Hóa trị", "Phẫu thuật cắt bỏ", "Xạ trị", "Miễn dịch trị liệu"],
            correct: 1
        },
        {
            question: "Thuốc điều trị đích chính cho GIST là gì?",
            answers: ["Bevacizumab", "Imatinib", "Pembrolizumab", "Cisplatin"],
            correct: 1
        },
        {
            question: "Phác đồ hóa trị tiêu chuẩn cho adenocarcinoma ruột non là gì?",
            answers: ["FOLFOX", "CHOP", "GEMOX", "XELOX"],
            correct: 0
        },
        {
            question: "Liệu pháp phóng xạ thụ thể peptide (PRRT) được chỉ định cho loại u nào?",
            answers: ["Adenocarcinoma", "NETs", "GIST", "Lymphoma"],
            correct: 1
        },
        {
            question: "Một bệnh nhân nữ 58 tuổi có triệu chứng bừng đỏ, tiêu chảy kéo dài và tổn thương gan trên CT. Loại u nào phù hợp nhất?",
            answers: ["Adenocarcinoma", "Lymphoma", "NETs", "GIST"],
            correct: 2
        },
        {
            question: "Một bệnh nhân nam 45 tuổi phát hiện có khối u ở hỗng tràng, dương tính với CD117 và DOG1. Điều trị ban đầu là gì?",
            answers: ["Phẫu thuật + Imatinib", "Hóa trị đơn thuần", "Xạ trị", "Liệu pháp miễn dịch"],
            correct: 0
        },
        {
            question: "Yếu tố nguy cơ nào có liên quan đến ung thư biểu mô tuyến (adenocarcinoma) ruột non?",
            answers: ["Bệnh Crohn", "Helicobacter pylori", "Viêm gan B", "Béo phì"],
            correct: 0
        },
        {
            question: "Hội chứng di truyền nào làm tăng nguy cơ adenocarcinoma ruột non?",
            answers: ["Hội chứng Lynch", "Hội chứng Turner", "Hội chứng Down", "Hội chứng Marfan"],
            correct: 0
        },
        {
            question: "Loại thức ăn nào làm tăng nguy cơ ung thư ruột non?",
            answers: ["Thực phẩm nhiều chất xơ", "Thực phẩm chứa nitrosamine (thịt hun khói, thịt chế biến sẵn)", "Chế độ ăn giàu rau xanh", "Thực phẩm lên men"],
            correct: 1
        },
        {
            question: "Triệu chứng nào phổ biến nhất trong adenocarcinoma ruột non?",
            answers: ["Tiêu chảy kéo dài", "Đau bụng và sụt cân", "Sốt kéo dài", "Chướng bụng"],
            correct: 1
        },
        {
            question: "NETs có thể gây ra hội chứng nào do tiết hormone?",
            answers: ["Hội chứng Cushing", "Hội chứng carcinoid", "Hội chứng Fanconi", "Hội chứng Marfan"],
            correct: 1
        },
        {
            question: "Đột biến nào có vai trò quan trọng trong phát triển GIST?",
            answers: ["TP53", "KIT", "KRAS", "BRCA1"],
            correct: 1
        },
        {
            question: "Xét nghiệm nào cần làm để hướng dẫn điều trị GIST?",
            answers: ["Phân tích đột biến KIT và PDGFRA", "Xét nghiệm CA19-9", "Sinh thiết dịch não tủy", "Điện di protein"],
            correct: 0
        },
        {
            question: "Khi nào phẫu thuật là lựa chọn điều trị chính cho GIST?",
            answers: ["Khi khối u <2cm", "Khi khối u >10cm", "Khi khối u không có di căn", "Khi khối u có đột biến KRAS"],
            correct: 2
        },
        {
            question: "Thuốc nào dùng điều trị GIST khi kháng imatinib?",
            answers: ["Sorafenib", "Sunitinib", "Everolimus", "Cisplatin"],
            correct: 1
        },
        {
            question: "Yếu tố nào dưới đây giúp cải thiện tiên lượng NETs?",
            answers: ["Biệt hóa tốt (G1, G2)", "Có di căn gan", "Tăng chỉ số phân bào", "Đột biến TP53"],
            correct: 0
        },
        {
            question: "Tỷ lệ sống sau 5 năm của bệnh nhân GIST chưa di căn là bao nhiêu?",
            answers: ["20-30%", "40-50%", "60-80%", "90%"],
            correct: 3
        },
        {
            question: "Phương pháp điều trị nào mới đang được thử nghiệm cho adenocarcinoma ruột non?",
            answers: ["Liệu pháp miễn dịch", "Phẫu thuật nội soi", "Xạ trị proton", "Đông lạnh khối u"],
            correct: 0
        },
        {
            question: "DNA khối u tuần hoàn (ctDNA) đang được nghiên cứu với mục đích gì?",
            answers: ["Phát hiện sớm và theo dõi ung thư", "Chẩn đoán bệnh Crohn", "Xác định vi khuẩn đường ruột", "Điều trị bệnh lý chuyển hóa"],
            correct: 0
        },
        {
            question: "Bệnh nhân nam 65 tuổi có thiếu máu và xuất huyết tiêu hóa ẩn, nội soi cho thấy u tá tràng. Khả năng cao nhất là gì?",
            answers: ["GIST", "Adenocarcinoma", "NETs", "Lymphoma"],
            correct: 1
        },
        {
            question: "Một bệnh nhân nữ 50 tuổi phát hiện có GIST kích thước 7cm, đột biến KIT exon 11. Hướng điều trị chính là gì?",
            answers: ["Phẫu thuật đơn thuần", "Imatinib trước phẫu thuật rồi cắt bỏ", "Hóa trị", "Xạ trị"],
            correct: 1
        },
        {
            question: "Một bệnh nhân NETs có di căn gan, nhưng triệu chứng ổn định. Lựa chọn điều trị tối ưu là gì?",
            answers: ["Hóa trị", "Phẫu thuật cắt gan", "Octreotide hoặc PRRT", "Miễn dịch trị liệu"],
            correct: 2
        },
        {
            question: "Yếu tố quan trọng nhất giúp điều trị hiệu quả GIST?",
            answers: ["Xác định đột biến KIT/PDGFRA", "Sinh thiết mô bệnh học", "Chụp CT", "Xét nghiệm CA19-9"],
            correct: 0
        },
        {
            question: "Điều gì làm tăng khả năng phát hiện sớm khối u ruột non?",
            answers: ["Nội soi viên nang", "Xét nghiệm máu tổng quát", "Xét nghiệm nước tiểu", "Đo độ bão hòa oxy"],
            correct: 0
        },
        {
            question: "Điều gì giúp phân biệt NETs biệt hóa tốt (G1, G2) với carcinoma thần kinh nội tiết (NEC)?",
            answers: ["Chỉ số phân bào thấp ở NETs biệt hóa tốt", "NETs có đột biến TP53 nhiều hơn", "NEC không bao giờ di căn", "NETs không tiết hormone"],
            correct: 0
        },
        {
            question: "Loại khối u ruột non nào có thể điều trị bằng liệu pháp miễn dịch khi có biểu hiện MSI-H?",
            answers: ["GIST", "Adenocarcinoma", "NETs", "Lymphoma"],
            correct: 1
        },
        {
            question: "Kết hợp điều trị nào thường được sử dụng cho bệnh nhân GIST có di căn không thể phẫu thuật?",
            answers: ["Imatinib đơn thuần", "Phẫu thuật + hóa trị", "Xạ trị + hóa trị", "Hóa trị + liệu pháp miễn dịch"],
            correct: 0
        },
        {
            question: "Điều trị nào giúp kiểm soát hội chứng carcinoid ở bệnh nhân NETs?",
            answers: ["Octreotide", "Cisplatin", "Methotrexate", "Rituximab"],
            correct: 0
        },
        {
            question: "Yếu tố nào dưới đây giúp xác định tiên lượng GIST?",
            answers: ["Loại mô bệnh học", "Sự hiện diện của di căn hạch", "Đột biến KIT và chỉ số phân bào", "Tuổi bệnh nhân"],
            correct: 2
        },
        {
            question: "Đâu là một phương pháp điều trị nhắm trúng đích mới đang được nghiên cứu cho adenocarcinoma ruột non?",
            answers: ["Thuốc ức chế EGFR", "Rituximab", "Bevacizumab", "Liệu pháp tế bào T CAR"],
            correct: 0
        },
        {
            question: "Mục đích của chụp PET-CT với Gallium-68 trong NETs là gì?",
            answers: ["Xác định đột biến gen", "Đánh giá khả năng phẫu thuật", "Định vị và đánh giá mức độ di căn", "Đánh giá tình trạng viêm mạn tính"],
            correct: 2
        },
        {
            question: "Hóa trị có vai trò gì trong điều trị NETs?",
            answers: ["Hóa trị là phương pháp điều trị chính", "Hóa trị chỉ có tác dụng trên NETs biệt hóa kém (NEC)", "Hóa trị hiệu quả hơn so với liệu pháp hormone", "Không có vai trò trong điều trị NETs"],
            correct: 1
        },
        {
            question: "Yếu tố quan trọng giúp phân biệt GIST với các loại sarcoma khác của đường tiêu hóa?",
            answers: ["Bắt màu Chromogranin A", "Dương tính với CD117 (c-KIT)", "Xâm lấn hạch bạch huyết nhiều hơn", "Xuất phát từ biểu mô tuyến"],
            correct: 1
        },
        {
            question: "Điều gì giúp giảm nguy cơ mắc adenocarcinoma ruột non?",
            answers: ["Hạn chế tiêu thụ thực phẩm giàu nitrosamine", "Dùng kháng sinh thường xuyên", "Giảm ăn rau xanh", "Hút thuốc lá"],
            correct: 0
        }
    ],
    "BUỒNG TRỨNG & TUYẾN VÚ": [
        {
            question: "Loại u buồng trứng phổ biến nhất là?",
            answers: ["U tế bào mầm", "U mô đệm - dây sinh dục", "U biểu mô bề mặt", "U di căn"],
            correct: 2
        },
        {
            question: "U dịch trong buồng trứng có đặc điểm gì?",
            answers: ["Thường là ác tính", "Chứa dịch trong, có thể có cát (psammoma bodies)", "Luôn liên quan đến lạc nội mạc tử cung", "Hiếm gặp"],
            correct: 1
        },
        {
            question: "U Brenner có đặc điểm nào sau đây?",
            answers: ["Xuất phát từ tế bào mô đệm", "Thường là ác tính", "Nhân rãnh giống hạt cà phê", "Chứa dịch nhầy"],
            correct: 2
        },
        {
            question: "Loại u nào có thể liên quan đến lạc nội mạc tử cung?",
            answers: ["U dịch trong", "U dạng nội mạc", "U tế bào sáng", "B và C đúng"],
            correct: 3
        },
        {
            question: "Đặc điểm vi thể quan trọng của u dịch trong ác tính là?",
            answers: ["Có thể cát (psammoma bodies)", "Mô sợi dày đặc", "Nhân hình que", "Nhiều tế bào khổng lồ"],
            correct: 0
        },
        {
            question: "U tế bào mầm nào phổ biến nhất?",
            answers: ["U nghịch mầm", "U quái trưởng thành", "U xoang nội bì", "Carcinôm đệm nuôi"],
            correct: 1
        },
        {
            question: "Thể Schiller-Duval là đặc trưng của?",
            answers: ["U nghịch mầm", "U xoang nội bì", "U quái trưởng thành", "Carcinôm đệm nuôi"],
            correct: 1
        },
        {
            question: "U nghịch mầm có đặc điểm nào sau đây?",
            answers: ["Tế bào lớn, bào tương sáng, thấm nhập lympho bào", "Tế bào nhỏ, nhân đông đặc", "Chứa nhiều tuyến nhầy", "Luôn lành tính"],
            correct: 0
        },
        {
            question: "AFP (alpha-fetoprotein) là dấu ấn ung thư quan trọng trong?",
            answers: ["U xoang nội bì", "U nghịch mầm", "U quái trưởng thành", "U tế bào hạt"],
            correct: 0
        },
        {
            question: "Carcinôm đệm nuôi có tiên lượng?",
            answers: ["Tốt, đáp ứng cao với hóa trị", "Xấu, ít đáp ứng hóa trị", "Trung bình", "Không ảnh hưởng đến tiên lượng"],
            correct: 1
        },
        {
            question: "U nào có thể tiết estrogen và gây tăng sản nội mạc tử cung?",
            answers: ["U sợi", "U tế bào vỏ", "U tế bào hạt", "B và C đúng"],
            correct: 3
        },
        {
            question: "Cấu trúc thể Call-Exner gặp trong?",
            answers: ["U tế bào hạt", "U sợi", "U Brenner", "U quái trưởng thành"],
            correct: 0
        },
        {
            question: "U Sertoli-Leydig có thể gây triệu chứng nào sau đây?",
            answers: ["Nữ hóa", "Nam hóa", "Tăng sản tuyến vú", "Không có triệu chứng nội tiết"],
            correct: 1
        },
        {
            question: "U Krukenberg thường có nguồn gốc từ?",
            answers: ["Ung thư vú", "Ung thư đại tràng", "Ung thư dạ dày", "Ung thư phổi"],
            correct: 2
        },
        {
            question: "Tế bào nhẫn (signet-ring cells) là đặc trưng của?",
            answers: ["U Krukenberg", "U dịch trong", "U tế bào sáng", "U quái trưởng thành"],
            correct: 0
        },
        {
            question: "U lành tính phổ biến nhất của tuyến vú là?",
            answers: ["U sợi tuyến", "U diệp thể", "U nhú trong ống", "Carcinôm tại chỗ"],
            correct: 0
        },
        {
            question: "Biểu hiện đặc trưng của u nhú trong ống dẫn là?",
            answers: ["Chảy máu núm vú", "Đau ngực lan rộng", "U cứng không di động", "Tăng sản mô tuyến"],
            correct: 0
        },
        {
            question: "Loại ung thư vú phổ biến nhất là?",
            answers: ["Carcinôm ống tại chỗ", "Carcinôm tiểu thùy", "Carcinôm không đặc hiệu (N.O.S.)", "Carcinôm nhầy"],
            correct: 2
        },
        {
            question: "HER2 dương tính trong ung thư vú có ý nghĩa gì?",
            answers: ["Tiên lượng tốt hơn", "Tiên lượng xấu hơn, đáp ứng với trastuzumab", "Không ảnh hưởng tiên lượng", "Không ảnh hưởng điều trị"],
            correct: 1
        },
        {
            question: "Yếu tố nguy cơ chính của ung thư vú là?",
            answers: ["Tiền sử gia đình", "Đột biến BRCA1/BRCA2", "Estrogen cao", "Tất cả các đáp án trên"],
            correct: 3
        },
        {
            question: "Kích thước khối u ung thư vú dưới 2 cm có tiên lượng?",
            answers: ["Tốt", "Xấu", "Không liên quan tiên lượng", "Chắc chắn không di căn"],
            correct: 0
        },
        {
            question: "Yếu tố nào dưới đây liên quan đến tiên lượng xấu trong ung thư vú?",
            answers: ["HER2 dương tính", "ER/PR dương tính", "Hạch bạch huyết âm tính", "Kích thước u nhỏ hơn 2 cm"],
            correct: 0
        },
        {
            question: "Carcinôm vú nào có tiên lượng tốt nhất?",
            answers: ["Carcinôm ống không đặc hiệu", "Carcinôm nhầy", "Carcinôm dạng viêm", "Carcinôm tế bào sáng"],
            correct: 1
        },
        {
            question: "Carcinôm vú nào có tỷ lệ di căn xương và phúc mạc cao?",
            answers: ["Carcinôm tiểu thùy", "Carcinôm ống không đặc hiệu", "Carcinôm dạng viêm", "Carcinôm nhầy"],
            correct: 0
        },
        {
            question: "Loại ung thư vú phổ biến nhất ở nam giới là?",
            answers: ["Carcinôm tiểu thùy", "Carcinôm ống không đặc hiệu (IDC)", "Carcinôm nhầy", "Carcinôm dạng viêm"],
            correct: 1
        },
        {
            question: "Ung thư vú ở nam giới có tiên lượng?",
            answers: ["Tốt hơn nữ giới", "Xấu hơn nữ giới do phát hiện muộn", "Không khác biệt so với nữ giới", "Không có ý nghĩa tiên lượng"],
            correct: 1
        },
        {
            question: "Xét nghiệm tầm soát ung thư vú quan trọng nhất là?",
            answers: ["Siêu âm tuyến vú", "MRI tuyến vú", "Nhũ ảnh (mammography)", "Sinh thiết vú"],
            correct: 2
        },
        {
            question: "Xét nghiệm nào giúp phát hiện đột biến BRCA1/BRCA2?",
            answers: ["Xét nghiệm máu", "Sinh thiết mô vú", "PCR (phản ứng chuỗi polymerase)", "Chụp nhũ ảnh"],
            correct: 2
        },
        {
            question: "Liệu pháp nào thường được áp dụng cho ung thư vú có HER2 dương tính?",
            answers: ["Tamoxifen", "Trastuzumab", "Bevacizumab", "Paclitaxel"],
            correct: 1
        },
        {
            question: "Ung thư vú có thụ thể ER/PR dương tính có thể điều trị bằng?",
            answers: ["Liệu pháp miễn dịch", "Liệu pháp nội tiết", "Liệu pháp đích", "Hóa trị"],
            correct: 1
        },
        {
            question: "Viêm vú cấp tính thường gặp ở?",
            answers: ["Trẻ sơ sinh", "Phụ nữ cho con bú", "Người cao tuổi", "Nam giới"],
            correct: 1
        },
        {
            question: "Vi khuẩn phổ biến nhất gây viêm vú cấp tính là?",
            answers: ["Streptococcus pneumoniae", "Staphylococcus aureus", "Escherichia coli", "Klebsiella pneumoniae"],
            correct: 1
        },
        {
            question: "Thay đổi sợi bọc tuyến vú có nguy cơ trở thành ung thư không?",
            answers: ["Không bao giờ", "Chỉ khi có tăng sinh không điển hình", "Luôn luôn dẫn đến ung thư", "Không ảnh hưởng"],
            correct: 1
        },
        {
            question: "U diệp thể thuộc nhóm u nào?",
            answers: ["U tuyến", "U liên kết", "U mỡ", "U lympho"],
            correct: 1
        },
        {
            question: "U diệp thể giáp biên ác có đặc điểm gì?",
            answers: ["Không có khả năng tái phát", "Nguy cơ xâm lấn mô xung quanh", "Không cần điều trị", "Chỉ gặp ở người cao tuổi"],
            correct: 1
        },
        {
            question: "Ung thư vú dạng viêm có đặc điểm nào dưới đây?",
            answers: ["Xuất hiện chậm, tiên lượng tốt", "Sưng, đỏ, xâm nhập mạch bạch huyết", "Không có triệu chứng lâm sàng", "Luôn có di căn xa"],
            correct: 1
        },
        {
            question: "Tỷ lệ sống sau 3 năm của bệnh nhân cancer vú dạng viêm?",
            answers: ["80%", "50%", "10%", "3%"],
            correct: 2
        },
        {
            question: "Loại carcinôm vú hiếm gặp nhất?",
            answers: ["Carcinôm ống không đặc hiệu", "Carcinôm tế bào sáng", "Carcinôm nhầy", "Carcinôm tiểu thùy"],
            correct: 1
        },
        {
            question: "Carcinôm dạng viêm có đặc điểm gì?",
            answers: ["Không liên quan xâm nhập mạch máu", "Luôn xuất hiện ở cả hai vú", "Xâm nhập mạnh vào mạch bạch huyết", "Tiên lượng tốt hơn các loại khác"],
            correct: 2
        },
        {
            question: "Yếu tố nguy cơ chính của cancer vú dạng viêm?",
            answers: ["Di truyền", "Béo phì", "Chủng tộc (phổ biến hơn ở phụ nữ da đen)", "Cả B và C"],
            correct: 3
        }
    ],
    "THẬN & BÀNG QUANG": [
        {
            question: "U tuyến vỏ thận thường có kích thước bao nhiêu?",
            answers: ["< 2 cm", "2-5 cm", "5-10 cm", "> 10 cm"],
            correct: 0
        },
        {
            question: "Đặc điểm vi thể của u tuyến vỏ thận KHÔNG bao gồm?",
            answers: ["Cấu trúc đặc hoặc nhú", "Tế bào hình lập phương hoặc đa diện", "Nhân lớn, dị dạng, phân bào bất thường", "Bào tương chứa hạt và không bào mỡ"],
            correct: 2
        },
        {
            question: "U tế bào kẽ của tủy thận thường được phát hiện trong hoàn cảnh nào?",
            answers: ["Khám sức khỏe định kỳ", "Chẩn đoán hình ảnh khi có triệu chứng lâm sàng", "Tình cờ trong quá trình tử thiết", "Khi bệnh nhân có triệu chứng tiểu máu"],
            correct: 2
        },
        {
            question: "U lành mạch máu - cơ - mỡ (Angiomyolipoma) có liên quan đến bệnh lý nào?",
            answers: ["Hội chứng Von Hippel-Lindau", "Bệnh xơ củ (Tuberous sclerosis)", "Hội chứng Li-Fraumeni", "Hội chứng Lynch"],
            correct: 1
        },
        {
            question: "U phồng bào (Oncocytoma) có đặc điểm nào sau đây?",
            answers: ["Tế bào nhỏ, bào tương sáng", "Tế bào lớn, ưa eosin, nhân nhỏ", "Xâm nhập mạnh vào nhu mô thận", "Luôn có tiên lượng xấu"],
            correct: 1
        },
        {
            question: "Carcinôm tế bào thận chiếm bao nhiêu phần trăm các ung thư thận?",
            answers: ["10%", "50%", "85-90%", "100%"],
            correct: 2
        },
        {
            question: "Yếu tố nguy cơ chính của carcinôm tế bào thận là?",
            answers: ["Tiền sử viêm cầu thận", "Hút thuốc lá", "Chế độ ăn giàu protein", "Nhiễm virus viêm gan B"],
            correct: 1
        },
        {
            question: "Carcinôm tế bào thận có thể xâm lấn vào cấu trúc nào sau đây?",
            answers: ["Tĩnh mạch thận, tĩnh mạch chủ dưới", "Chỉ xâm lấn mô liên kết quanh thận", "Chỉ di căn hạch", "Không có khả năng xâm lấn"],
            correct: 0
        },
        {
            question: "Loại carcinôm tế bào thận phổ biến nhất là?",
            answers: ["Carcinôm tế bào sáng", "Carcinôm nhú", "Carcinôm sắc bào", "Carcinôm dạng ống góp"],
            correct: 0
        },
        {
            question: "Carcinôm tế bào sáng có liên quan đến đột biến gen nào?",
            answers: ["TP53", "VHL (Von Hippel-Lindau)", "APC", "KRAS"],
            correct: 1
        },
        {
            question: "U Wilms thường gặp ở độ tuổi nào?",
            answers: ["Trẻ em dưới 5 tuổi", "Người trưởng thành", "Người già trên 70 tuổi", "Mọi lứa tuổi"],
            correct: 0
        },
        {
            question: "Đặc điểm vi thể của u Wilms gồm bao nhiêu thành phần chính?",
            answers: ["2", "3", "4", "5"],
            correct: 1
        },
        {
            question: "Thành phần mô học của u Wilms bao gồm?",
            answers: ["Tế bào biểu mô, mô đệm, tế bào nguyên bào thận", "Tế bào nội mô, mô mỡ, tế bào sợi", "Chỉ có mô đệm", "Chỉ có nguyên bào sợi"],
            correct: 0
        },
        {
            question: "Loại u nào chiếm 95% các trường hợp ung thư bàng quang?",
            answers: ["Carcinôm biểu mô chuyển tiếp", "Carcinôm tế bào gai", "Carcinôm tuyến", "Lymphôm"],
            correct: 0
        },
        {
            question: "Yếu tố nguy cơ chính của carcinôm bàng quang là?",
            answers: ["Hút thuốc lá", "Tiền sử viêm bàng quang cấp", "Chế độ ăn nhiều muối", "Đái tháo đường"],
            correct: 0
        },
        {
            question: "Đặc điểm vi thể của carcinôm biểu mô chuyển tiếp gồm?",
            answers: ["Cấu trúc nhú hoặc đặc", "Luôn có tế bào gai", "Không có khả năng xâm lấn", "Không có tế bào tăng sinh"],
            correct: 0
        },
        {
            question: "Biểu hiện lâm sàng thường gặp nhất của carcinôm bàng quang là?",
            answers: ["Tiểu máu không đau", "Tiểu buốt", "Tiểu đêm nhiều lần", "Đau vùng thắt lưng"],
            correct: 0
        },
        {
            question: "Carcinôm biểu mô chuyển tiếp xâm lấn lớp nào có tiên lượng xấu nhất?",
            answers: ["Lớp cơ bàng quang", "Lớp niêm mạc", "Lớp dưới niêm mạc", "Lớp liên kết"],
            correct: 0
        },
        {
            question: "Carcinôm bàng quang biệt hóa kém có nguy cơ?",
            answers: ["Xâm lấn và di căn cao", "Không có khả năng di căn", "Không cần điều trị", "Chỉ cần theo dõi định kỳ"],
            correct: 0
        },
        {
            question: "Tiên lượng của carcinôm tế bào gai bàng quang như thế nào?",
            answers: ["Xấu hơn so với carcinôm biểu mô chuyển tiếp", "Tốt hơn so với carcinôm biểu mô chuyển tiếp", "Không có khả năng di căn", "Luôn có tiên lượng tốt"],
            correct: 0
        },
        {
            question: "Giai đoạn nào của carcinôm bàng quang có tiên lượng xấu nhất?",
            answers: ["T4", "T1", "T2", "Ta"],
            correct: 0
        },
        {
            question: "Phương pháp điều trị chính cho carcinôm tế bào thận là?",
            answers: ["Hóa trị", "Phẫu thuật cắt thận", "Xạ trị", "Liệu pháp miễn dịch đơn thuần"],
            correct: 1
        },
        {
            question: "Carcinôm bàng quang giai đoạn xâm lấn cơ (T2 trở lên) thường được điều trị bằng?",
            answers: ["Cắt bàng quang toàn phần", "Nội soi cắt u bàng quang (TURBT)", "Hóa trị tại chỗ", "Theo dõi không điều trị"],
            correct: 0
        },
        {
            question: "Đâu là yếu tố tiên lượng quan trọng nhất của carcinôm tế bào thận?",
            answers: ["Độ xâm lấn và di căn", "Kích thước khối u", "Độ tuổi bệnh nhân", "Giới tính bệnh nhân"],
            correct: 0
        },
        {
            question: "U Wilms (nephroblastoma) có tiên lượng tốt nhất khi?",
            answers: ["Được phát hiện và điều trị ở giai đoạn sớm", "Có kích thước lớn nhưng chưa di căn", "Đã di căn xa nhưng đáp ứng với hóa trị", "Điều trị muộn, giai đoạn cuối"],
            correct: 0
        },
        {
            question: "Carcinôm biểu mô bàng quang không xâm lấn có nguy cơ tái phát cao nhất trong trường hợp nào?",
            answers: ["U có nhiều tổn thương đa ổ", "U đơn độc nhỏ dưới 1 cm", "Bệnh nhân không hút thuốc", "U phát hiện ở giai đoạn muộn"],
            correct: 0
        },
        {
            question: "Đâu là yếu tố nguy cơ quan trọng gây tái phát carcinôm bàng quang?",
            answers: ["Tiền sử hút thuốc lá", "Tăng huyết áp", "Béo phì", "Tiểu đường"],
            correct: 0
        },
        {
            question: "Carcinôm tuyến bàng quang có thể có nguồn gốc từ?",
            answers: ["Chuyển sản tuyến của biểu mô chuyển tiếp", "Dị sản gai trong niêm mạc bàng quang", "Nhiễm Schistosoma haematobium", "Viêm bàng quang do virus"],
            correct: 0
        },
        {
            question: "Carcinôm tế bào nhỏ của bàng quang có đặc điểm giống với?",
            answers: ["Ung thư tế bào nhỏ phổi", "Sarcôm mô mềm", "Carcinôm tế bào gai", "U Wilms"],
            correct: 0
        },
        {
            question: "Carcinôm viêm (Micropapillary carcinoma) của bàng quang có tiên lượng như thế nào?",
            answers: ["Xấu, do đặc tính xâm lấn mạnh", "Tốt, do phát hiện sớm", "Trung bình, đáp ứng tốt với hóa trị", "Không có khả năng di căn"],
            correct: 0
        }
    ],
    "VIÊM": [
        {
            question: "Viêm là phản ứng sinh học nhằm mục đích gì?",
            answers: ["Phá hủy mô", "Tăng sinh tế bào", "Loại bỏ tác nhân gây hại và sửa chữa mô", "Ngăn ngừa mất nước"],
            correct: 2
        },
        {
            question: "Dạng viêm nào có thời gian kéo dài và có thể gây tổn thương mô?",
            answers: ["Viêm bán cấp", "Viêm nhẹ", "Viêm cấp tính", "Viêm mãn tính"],
            correct: 3
        },
        {
            question: "Dấu hiệu 'functio laesa' có nghĩa là gì?",
            answers: ["Sưng", "Đỏ", "Mất chức năng", "Nóng"],
            correct: 2
        },
        {
            question: "Ai là người bổ sung dấu hiệu thứ năm 'functio laesa' trong viêm?",
            answers: ["Hippocrates", "Galen", "Virchow", "Celsus"],
            correct: 1
        },
        {
            question: "Dấu hiệu rubor trong viêm là gì?",
            answers: ["Đau", "Đỏ", "Nóng", "Mất chức năng"],
            correct: 1
        },
        {
            question: "Viêm cấp tính thường kéo dài trong bao lâu?",
            answers: ["Hàng tuần", "Hàng tháng", "Trong vài ngày", "Hàng năm"],
            correct: 2
        },
        {
            question: "Nguyên nhân phổ biến nhất gây viêm là:",
            answers: ["Tổn thương hóa học", "Thiếu máu", "Vi sinh vật", "Phản ứng thần kinh"],
            correct: 2
        },
        {
            question: "Đâu không phải là nguyên nhân gây viêm?",
            answers: ["Nhiễm trùng", "Hoại tử mô", "Dị vật", "Sự phát triển xương"],
            correct: 3
        },
        {
            question: "Các receptor nhận diện vi sinh vật được gọi là:",
            answers: ["HLA", "PRRs", "APCs", "MHC"],
            correct: 1
        },
        {
            question: "Toll-like receptors (TLRs) nhận diện:",
            answers: ["Tế bào thần kinh", "Hồng cầu", "Sản phẩm vi sinh vật", "Các yếu tố tăng trưởng"],
            correct: 2
        },
        {
            question: "Phản ứng mạch máu đầu tiên trong viêm cấp là:",
            answers: ["Tăng tính thấm", "Giảm lưu lượng máu", "Giãn mạch", "Kết dính bạch cầu"],
            correct: 2
        },
        {
            question: "Chất nào sau đây gây giãn mạch trong viêm?",
            answers: ["TGF-β", "IL-10", "Histamin", "Fibrinogen"],
            correct: 2
        },
        {
            question: "'Stasis' là:",
            answers: ["Giảm tính thấm", "Dòng máu nhanh", "Ứ máu", "Tan huyết"],
            correct: 2
        },
        {
            question: "Tăng tính thấm mạch máu xảy ra do:",
            answers: ["Teo mô", "Co rút tế bào nội mô", "Giảm áp lực thẩm thấu", "Giãn cơ"],
            correct: 1
        },
        {
            question: "Bradykinin là chất:",
            answers: ["Giảm đau", "Giảm thấm", "Gây giãn mạch và đau", "Trung hòa histamin"],
            correct: 2
        },
        {
            question: "Mạch bạch huyết trong viêm có vai trò:",
            answers: ["Hấp thu glucose", "Tạo máu", "Dẫn lưu dịch viêm", "Sản xuất tế bào T"],
            correct: 2
        },
        {
            question: "Lymphadenitis là:",
            answers: ["Viêm mô mềm", "Viêm mạch máu", "Viêm hạch bạch huyết", "Viêm tuyến yên"],
            correct: 2
        },
        {
            question: "Quá trình 'rolling' của bạch cầu do phân tử nào điều hòa?",
            answers: ["Integrin", "Selectin", "ICAM-1", "Collagenase"],
            correct: 1
        },
        {
            question: "PECAM-1 có vai trò trong:",
            answers: ["Di chuyển bạch cầu qua nội mô", "Gây sốt", "Gây đau", "Tăng sinh collagen"],
            correct: 0
        },
        {
            question: "Hóa hướng động là:",
            answers: ["Phân chia bạch cầu", "Gắn bạch cầu vào nội mô", "Di chuyển bạch cầu về phía tín hiệu hóa học", "Hoại tử tế bào"],
            correct: 2
        },
        {
            question: "Chất trung gian kháng viêm được tạo ra trong giai đoạn kết thúc viêm là:",
            answers: ["IL-6", "IL-1", "Lipoxin", "C5a"],
            correct: 2
        },
        {
            question: "Cytokine nào sau đây là chống viêm?",
            answers: ["TNF", "IL-10", "IL-1", "IL-8"],
            correct: 1
        },
        {
            question: "Lipoxin được tổng hợp từ:",
            answers: ["Histamin", "Nitric oxide", "Axit arachidonic", "Cholesterol"],
            correct: 2
        },
        {
            question: "Tế bào chết trong viêm được loại bỏ bởi:",
            answers: ["Tế bào plasma", "Neutrophil", "Erythrocyte", "Đại thực bào qua efferocytosis"],
            correct: 3
        },
        {
            question: "'Con đường chống viêm cholinergic' liên quan đến:",
            answers: ["Đáp ứng miễn dịch dịch thể", "Dây thần kinh phế vị", "Tế bào mast", "Mạch bạch huyết"],
            correct: 1
        },
        {
            question: "Histamin được lưu trữ trong:",
            answers: ["Tế bào mast", "Hồng cầu", "Tế bào T", "Đại thực bào"],
            correct: 0
        },
        {
            question: "Prostaglandin có tác dụng:",
            answers: ["Gây co mạch", "Gây giãn mạch và đau", "Tiêu diệt vi khuẩn", "Kết dính bạch cầu"],
            correct: 1
        },
        {
            question: "C5a là sản phẩm từ:",
            answers: ["Tế bào T", "Hệ thống bổ thể", "Neutrophil", "Thrombin"],
            correct: 1
        },
        {
            question: "Cytokine nào gây viêm mạnh nhất?",
            answers: ["TGF-β", "IL-4", "TNF", "IL-12"],
            correct: 2
        },
        {
            question: "Nitric oxide có tác dụng chính là:",
            answers: ["Gây hoại tử", "Gây sốt", "Giãn mạch và ức chế kết tụ tiểu cầu", "Tăng huyết áp"],
            correct: 2
        },
        {
            question: "Viêm thanh dịch đặc trưng bởi:",
            answers: ["Dịch nhiều protein và bạch cầu", "Dịch nghèo tế bào", "Áp xe", "Loét"],
            correct: 1
        },
        {
            question: "Viêm tơ huyết có đặc điểm:",
            answers: ["Do vi khuẩn sinh mủ", "Do tổn thương nhẹ", "Lắng đọng fibrin", "Không liên quan đến mạch máu"],
            correct: 2
        },
        {
            question: "Viêm mủ chứa nhiều:",
            answers: ["Đại thực bào", "Hồng cầu", "Bạch cầu trung tính", "Tế bào mast"],
            correct: 2
        },
        {
            question: "Áp xe là một:",
            answers: ["Viêm không có mủ", "U ác tính", "Ổ mủ khu trú", "Dị vật"],
            correct: 2
        },
        {
            question: "Loét là:",
            answers: ["U hạt", "Mất mô bề mặt", "Sự tích tụ dịch", "Viêm tơ huyết"],
            correct: 1
        },
        {
            question: "Kết quả khả quan nhất của viêm cấp là:",
            answers: ["Viêm mãn tính", "Hoại tử", "Hồi phục hoàn toàn", "Áp xe"],
            correct: 2
        },
        {
            question: "Viêm cấp chuyển thành viêm mãn tính khi:",
            answers: ["Hết tác nhân gây viêm", "Tác nhân viêm còn tồn tại", "Hệ miễn dịch hoạt động mạnh", "Có xơ hóa hoàn toàn"],
            correct: 1
        },
        {
            question: "Mô xơ hình thành khi:",
            answers: ["Mô có khả năng tái sinh cao", "Có vi khuẩn sinh mủ", "Tổn thương nghiêm trọng", "Có tăng tính thấm nhẹ"],
            correct: 2
        },
        {
            question: "Viêm mãn tính có đặc điểm:",
            answers: ["Chủ yếu neutrophil", "Tăng sinh mạch máu", "Không có phá hủy mô", "Không có xơ hóa"],
            correct: 1
        },
        {
            question: "Tế bào chủ yếu trong viêm mãn tính:",
            answers: ["Neutrophil", "Đại thực bào", "Tiểu cầu", "Hồng cầu"],
            correct: 1
        },
        {
            question: "Nguyên nhân hàng đầu của viêm mãn tính là:",
            answers: ["Dị ứng", "Nhiễm trùng dai dẳng", "Loét", "Thiếu máu"],
            correct: 1
        },
        {
            question: "Vi khuẩn gây viêm u hạt điển hình:",
            answers: ["E. coli", "Staphylococcus", "Mycobacterium tuberculosis", "Neisseria"],
            correct: 2
        },
        {
            question: "Tế bào lympho CD4+ tiết cytokine để:",
            answers: ["Gây độc trực tiếp", "Điều chỉnh viêm", "Tiêu hóa vi khuẩn", "Tăng áp suất"],
            correct: 1
        },
        {
            question: "Tế bào plasma có vai trò chính trong:",
            answers: ["Giải phóng histamin", "Sản xuất kháng thể", "Giảm đau", "Co mạch"],
            correct: 1
        },
        {
            question: "Viêm mãn tính gây xơ hóa do hoạt động của:",
            answers: ["Tế bào mast", "Nguyên bào sợi", "Eosinophil", "Tế bào biểu mô"],
            correct: 1
        },
        {
            question: "Sửa chữa mô bằng tái sinh xảy ra khi:",
            answers: ["Tổn thương nhẹ và mô có khả năng tái tạo", "Có áp xe", "Có viêm u hạt", "Có collagen lắng đọng"],
            correct: 0
        },
        {
            question: "Yếu tố kích thích hình thành mạch máu trong sửa chữa:",
            answers: ["TNF", "IL-10", "VEGF", "C3a"],
            correct: 2
        },
        {
            question: "TGF-β có vai trò trong:",
            answers: ["Hóa hướng động", "Ức chế collagen", "Tăng lắng đọng collagen", "Gây đau"],
            correct: 2
        },
        {
            question: "Eosinophil thường thấy trong:",
            answers: ["Viêm do virus", "Viêm u hạt", "Phản ứng dị ứng và ký sinh trùng", "Xơ hóa"],
            correct: 2
        },
        {
            question: "Quá trình tạo sẹo bao gồm:",
            answers: ["Phá hủy nội mô", "Lắng đọng collagen", "Giảm nguyên bào sợi", "Hoại tử"],
            correct: 1
        }
    ],
    "BỆNH PHỔI": [
        {
            question: "Dị tật bẩm sinh nào gây chèn ép trung thất?",
            answers: ["Thiểu sản phổi", "Nang ruột trước", "Bất thường tuần hoàn phổi", "Xẹp phổi"],
            correct: 1
        },
        {
            question: "Nguyên nhân phổ biến gây thiểu sản phổi trong thai kỳ?",
            answers: ["Nhiễm virus bào thai", "Thiểu ối", "Đái tháo đường thai kỳ", "Dư ối"],
            correct: 1
        },
        {
            question: "Mô phổi không kết nối với đường thở là đặc điểm của:",
            answers: ["Nang ruột trước", "Xẹp phổi", "Bất thường tuần hoàn phổi", "Phù phổi"],
            correct: 2
        },
        {
            question: "Thiểu sản phổi có thể do:",
            answers: ["Thoát vị hoành bẩm sinh", "U phổi bẩm sinh", "Hẹp động mạch phổi", "Hội chứng Down"],
            correct: 0
        },
        {
            question: "Bất thường tuần hoàn phổi nhận máu từ:",
            answers: ["Động mạch phổi", "Động mạch hệ thống", "Tĩnh mạch phổi", "Tĩnh mạch chủ dưới"],
            correct: 1
        },
        {
            question: "Xẹp phổi do tắc nghẽn gây ra bởi:",
            answers: ["Tăng áp lực thẩm thấu", "Hít phải dịch vị", "Sự hấp thụ khí khỏi phế nang", "Tràn khí khoang màng phổi"],
            correct: 2
        },
        {
            question: "Dạng xẹp phổi do lực bên ngoài đè ép là:",
            answers: ["Do co rút", "Do chèn ép", "Do tắc nghẽn", "Do viêm"],
            correct: 1
        },
        {
            question: "Xẹp phổi do co rút liên quan đến:",
            answers: ["Hít phải dị vật", "Thoát vị cơ hoành", "Xơ hóa phổi", "Tràn khí"],
            correct: 2
        },
        {
            question: "Loại xẹp phổi có thể hồi phục nếu can thiệp sớm:",
            answers: ["Do co rút", "Do tắc nghẽn", "Do xơ hóa", "Do ung thư phổi"],
            correct: 1
        },
        {
            question: "Phương pháp chẩn đoán xẹp phổi hiệu quả nhất:",
            answers: ["Siêu âm", "Nội soi phế quản", "X-quang ngực", "MRI"],
            correct: 2
        },
        {
            question: "Phù phổi huyết động thường do:",
            answers: ["Suy tim trái", "Suy thận", "Hen phế quản", "Viêm phổi"],
            correct: 0
        },
        {
            question: "Đặc điểm mô học của phù phổi mãn:",
            answers: ["Mao mạch bị vỡ", "Đại thực bào chứa hemosiderin", "Hoại tử phế nang", "Viêm hạch bạch huyết"],
            correct: 1
        },
        {
            question: "Phù phổi do tổn thương vi mạch có thể do:",
            answers: ["Tràn dịch màng phổi", "Nhiễm trùng hoặc khí độc", "Xơ phổi", "Tăng áp phổi"],
            correct: 1
        },
        {
            question: "Đặc điểm chính của phù phổi là:",
            answers: ["Tăng tiết dịch nhầy", "Xẹp mô phổi", "Tích tụ dịch trong phế nang", "Dày thành phế nang"],
            correct: 2
        },
        {
            question: "Dấu hiệu lâm sàng phổ biến của phù phổi:",
            answers: ["Sốt", "Ho ra máu", "Khó thở", "Tăng cân nhanh"],
            correct: 2
        },
        {
            question: "Tổn thương phế nang lan tỏa là đặc điểm mô học chính của:",
            answers: ["Hen phế quản", "Viêm phổi mạn", "ARDS", "Giãn phế quản"],
            correct: 2
        },
        {
            question: "Màng hyaline trong ARDS gồm:",
            answers: ["Elastin và collagen", "Tế bào lympho", "Dịch phù và mảnh vỡ tế bào", "Hemoglobin và protein"],
            correct: 2
        },
        {
            question: "Cytokine tiền viêm chính trong ARDS:",
            answers: ["IL-10", "TNF và IL-1", "IL-4 và IL-5", "TGF-β và VEGF"],
            correct: 1
        },
        {
            question: "Giai đoạn tổ chức của ARDS có sự tăng sinh của:",
            answers: ["Tế bào bạch cầu", "Tế bào phế nang loại II", "Tế bào lympho", "Tế bào cơ trơn"],
            correct: 1
        },
        {
            question: "Biểu hiện lâm sàng đặc trưng của ARDS:",
            answers: ["Khó thở đột ngột không đáp ứng oxy", "Ho ra máu kéo dài", "Sốt cao và ban đỏ", "Tăng áp lực tĩnh mạch cổ"],
            correct: 0
        },
        {
            question: "Đặc điểm của khí phế thũng:",
            answers: ["Viêm hạch phế quản", "Tăng tiết nhầy", "Giãn không hồi phục phế nang", "Xơ hóa lan tỏa"],
            correct: 2
        },
        {
            question: "Dạng khí phế thũng liên quan thiếu hụt alpha-1 antitrypsin:",
            answers: ["Trung tâm tiểu thùy", "Toàn tiểu thùy", "Cận vách", "Không đều"],
            correct: 1
        },
        {
            question: "Bệnh lý nào sau đây là hình thái khí phế thũng ít gặp:",
            answers: ["Cận vách", "Trung tâm tiểu thùy", "Toàn tiểu thùy", "Không đều"],
            correct: 0
        },
        {
            question: "Hen phế quản dị ứng thường liên quan đến:",
            answers: ["Nhiễm trùng nấm", "Phản ứng IgE với dị nguyên", "Thiếu hụt alpha-1 antitrypsin", "Xơ hóa mô kẽ"],
            correct: 1
        },
        {
            question: "Đặc điểm mô học chính của viêm phế quản mạn:",
            answers: ["Xơ hóa phế nang", "Phì đại tuyến và tăng tiết nhầy", "Giảm surfactant", "Thâm nhiễm bạch cầu ái toan"],
            correct: 1
        },
        {
            question: "Giãn phế quản là hậu quả của:",
            answers: ["Viêm mạn tính và nhiễm trùng", "Suy tim trái", "Ung thư phổi", "Xơ phổi vô căn"],
            correct: 0
        },
        {
            question: "Cơ chế tắc nghẽn dòng khí trong khí phế thũng:",
            answers: ["Giảm diện tích mao mạch", "Phá hủy elastin và vách phế nang", "Tăng sản tế bào đáy", "Hẹp tiểu phế quản"],
            correct: 1
        },
        {
            question: "Hen phế quản không dị ứng thường do:",
            answers: ["Dị nguyên thức ăn", "Hít khói, khí lạnh", "Vi khuẩn Gram âm", "Di truyền"],
            correct: 1
        },
        {
            question: "Biện pháp điều trị chính trong hen phế quản:",
            answers: ["Kháng sinh phổ rộng", "Corticosteroid dạng hít", "Ức chế men chuyển", "Điều trị miễn dịch"],
            correct: 1
        },
        {
            question: "Biến chứng của giãn phế quản:",
            answers: ["Tràn khí màng phổi", "Nhiễm trùng tái phát", "Viêm cơ tim", "Tăng huyết áp"],
            correct: 1
        },
        {
            question: "Xơ phổi vô căn (IPF) có kiểu hình mô học đặc trưng là:",
            answers: ["NSIP", "UIP", "Sarcoidosis", "DIP"],
            correct: 1
        },
        {
            question: "Hình ảnh \"phổi tổ ong\" là đặc trưng giai đoạn cuối của:",
            answers: ["Hen phế quản", "IPF", "Giãn phế quản", "ARDS"],
            correct: 1
        },
        {
            question: "Bệnh phổi mô kẽ nào có tiên lượng tốt hơn IPF:",
            answers: ["UIP", "NSIP", "RBILD", "DIP"],
            correct: 1
        },
        {
            question: "Sarcoidosis đặc trưng bởi:",
            answers: ["Hạt hoại tử", "Hạt không hoại tử", "Hạt có mủ", "Hạt ái toan"],
            correct: 1
        },
        {
            question: "Bệnh phổi eosinophilic điển hình ở thể cấp tính:",
            answers: ["Giãn phế quản", "Hội chứng Loeffler", "Sarcoidosis", "IPF"],
            correct: 1
        },
        {
            question: "Nguồn gốc thường gặp nhất của huyết khối gây thuyên tắc phổi:",
            answers: ["Tĩnh mạch cửa", "Tĩnh mạch nông chi dưới", "Tĩnh mạch sâu chi dưới", "Tĩnh mạch phổi"],
            correct: 2
        },
        {
            question: "Tăng áp động mạch phổi được chẩn đoán khi áp lực > bao nhiêu mmHg lúc nghỉ:",
            answers: ["15", "20", "25", "30"],
            correct: 2
        },
        {
            question: "Tổn thương vi thể đặc trưng trong tăng áp phổi nặng:",
            answers: ["Hạt u", "Màng hyaline", "Tổn thương đám rối (plexiform lesions)", "Vách xơ hóa"],
            correct: 2
        },
        {
            question: "Kháng thể trong hội chứng Goodpasture nhắm vào:",
            answers: ["Surfactant", "Màng đáy phế nang và cầu thận", "Protein tiết", "Neutrophil"],
            correct: 1
        },
        {
            question: "Viêm mao mạch kèm ho ra máu, viêm cầu thận, có thể gặp trong:",
            answers: ["IPF", "Wegener granulomatosis", "ARDS", "DIP"],
            correct: 1
        },
        {
            question: "Vi khuẩn thường gặp nhất trong viêm phổi cộng đồng:",
            answers: ["Klebsiella", "Pseudomonas", "Streptococcus pneumoniae", "MRSA"],
            correct: 2
        },
        {
            question: "Tác nhân gây viêm phổi phổ biến ở bệnh nhân COPD:",
            answers: ["H. influenzae", "Legionella", "CMV", "RSV"],
            correct: 0
        },
        {
            question: "Viêm phổi do virus thường gây:",
            answers: ["Tắc nghẽn đường thở", "Tổn thương tế bào biểu mô phế quản", "Viêm mủ", "Hình thành nang"],
            correct: 1
        },
        {
            question: "Tác nhân viêm phổi thường gặp trong bệnh nhân suy giảm miễn dịch:",
            answers: ["Pneumocystis jiroveci", "Streptococcus viridans", "Salmonella", "Candida albicans"],
            correct: 0
        },
        {
            question: "Viêm phổi do hít có đặc điểm:",
            answers: ["Do virus", "Do đơn vi khuẩn", "Do đa vi khuẩn, gồm vi khuẩn kỵ khí", "Do ký sinh trùng"],
            correct: 2
        },
        {
            question: "Loại ung thư phổi phổ biến nhất:",
            answers: ["Ung thư tuyến", "Ung thư tế bào nhỏ", "Ung thư vảy", "U carcinoid"],
            correct: 0
        },
        {
            question: "Loại ung thư liên quan mạnh với hút thuốc:",
            answers: ["Adenocarcinoma", "Carcinoid", "Squamous cell carcinoma", "Ung thư tế bào sáng"],
            correct: 2
        },
        {
            question: "Hội chứng cận ung thư gặp trong ung thư tế bào nhỏ:",
            answers: ["Hội chứng ACTH và ADH", "Hội chứng tán huyết", "Suy thận", "Hạ canxi máu"],
            correct: 0
        },
        {
            question: "Mesothelioma liên quan đến:",
            answers: ["Nhiễm vi khuẩn", "Phơi nhiễm amiăng", "Thiếu oxy bào thai", "Di truyền"],
            correct: 1
        },
        {
            question: "Tràn khí màng phổi áp lực là cấp cứu do:",
            answers: ["Hút thuốc nhiều", "Màng phổi dày", "Cơ chế van một chiều gây tăng áp lực nhanh chóng", "Dị vật đường thở"],
            correct: 2
        }
    ],
    "DẠ DÀY": [
        {
            question: "Đặc điểm mô học chính của viêm dạ dày cấp tính là:",
            answers: ["Tăng sản tế bào đáy", "Thâm nhiễm bạch cầu đa nhân trung tính", "Hoại tử xuất huyết", "Chuyển sản ruột"],
            correct: 1
        },
        {
            question: "Trong bệnh dạ dày (gastropathy), phản ứng viêm thường:",
            answers: ["Mạnh và lan tỏa", "Tập trung ở đáy tuyến", "Rất ít hoặc không có", "Do vi khuẩn gây ra"],
            correct: 2
        },
        {
            question: "NSAIDs gây bệnh dạ dày do ức chế enzyme nào?",
            answers: ["Pepsin", "Cyclooxygenase (COX)", "Lipase", "Gastrin synthetase"],
            correct: 1
        },
        {
            question: "Tác dụng chính của prostaglandin trong dạ dày:",
            answers: ["Kích thích tiết axit", "Tăng hấp thu canxi", "Bảo vệ niêm mạc dạ dày", "Diệt khuẩn"],
            correct: 2
        },
        {
            question: "Biểu hiện mô học đặc trưng của gastropathy là:",
            answers: ["Loét sâu", "Tăng sản lympho", "Xuất huyết và hoại tử tế bào biểu mô", "Chuyển sản tế bào gai"],
            correct: 2
        },
        {
            question: "Chất nào sau đây không phải là nguyên nhân thường gặp của bệnh dạ dày?",
            answers: ["NSAIDs", "Rượu", "H. pylori", "Trào ngược mật"],
            correct: 2
        },
        {
            question: "Tổn thương ở bệnh dạ dày thường khu trú tại:",
            answers: ["Hang vị", "Vùng nối thực quản - dạ dày", "Vùng đáy dạ dày", "Nhiều vùng, không đặc hiệu"],
            correct: 3
        },
        {
            question: "Viêm dạ dày cấp tính có thể tiến triển thành:",
            answers: ["Loét mạn tính", "U tuyến", "Polyp", "Viêm tụy cấp"],
            correct: 0
        },
        {
            question: "Đặc điểm chung của viêm dạ dày cấp và gastropathy:",
            answers: ["Có hoại tử niêm mạc", "Có thể xuất hiện xuất huyết", "Có phản ứng u hạt", "Có chuyển sản tế bào"],
            correct: 1
        },
        {
            question: "Yếu tố nào không tham gia hàng rào bảo vệ niêm mạc dạ dày?",
            answers: ["Bicarbonate", "Prostaglandin", "Pepsin", "Chất nhầy"],
            correct: 2
        },
        {
            question: "Loét Curling liên quan đến:",
            answers: ["Nhiễm H. pylori", "Bỏng nặng", "Chấn thương sọ não", "Dùng thuốc chống đông"],
            correct: 1
        },
        {
            question: "Loét Cushing xảy ra trong:",
            answers: ["Viêm tụy cấp", "Suy gan", "Tăng áp lực nội sọ", "Xơ gan"],
            correct: 2
        },
        {
            question: "Cơ chế sinh bệnh chính của SRMD là:",
            answers: ["Nhiễm trùng", "Thiếu máu cục bộ niêm mạc", "Tăng tiết pepsin", "Thiếu bicarbonate hệ thống"],
            correct: 1
        },
        {
            question: "Yếu tố nguy cơ hàng đầu của SRMD:",
            answers: ["Cao huyết áp", "Bệnh tim mạch", "Sốc và ICU", "Rối loạn lipid"],
            correct: 2
        },
        {
            question: "Biểu hiện sớm nhất và phổ biến nhất của SRMD:",
            answers: ["Thủng dạ dày", "Chảy máu tiêu hóa", "Tắc ruột", "Hội chứng kém hấp thu"],
            correct: 1
        },
        {
            question: "Loét SRMD thường xuất hiện tại:",
            answers: ["Môn vị", "Thân và đáy dạ dày", "Hành tá tràng", "Tâm vị"],
            correct: 1
        },
        {
            question: "Đặc điểm mô học SRMD:",
            answers: ["Viêm mạnh", "Xâm nhập bạch cầu đa nhân", "Hoại tử bề mặt, ít viêm", "Teo tuyến"],
            correct: 2
        },
        {
            question: "PPIs trong SRMD có vai trò:",
            answers: ["Chống đông", "Bảo vệ gan", "Ức chế tiết axit", "Diệt vi khuẩn"],
            correct: 2
        },
        {
            question: "Loét do SRMD dễ xảy ra nhất ở:",
            answers: ["Người lớn tuổi khỏe mạnh", "Bệnh nhân nặng trong ICU", "Trẻ em", "Bệnh nhân tiểu đường ổn định"],
            correct: 1
        },
        {
            question: "Biến chứng nghiêm trọng nhất của SRMD:",
            answers: ["Viêm loét đại tràng", "Suy gan", "Chảy máu và thủng", "Xơ gan"],
            correct: 2
        },
        {
            question: "Nguyên nhân phổ biến nhất của viêm dạ dày mạn:",
            answers: ["Nhiễm H. pylori", "Dị ứng thực phẩm", "Nhiễm virus CMV", "Dùng steroid kéo dài"],
            correct: 0
        },
        {
            question: "Viêm dạ dày do H. pylori thường gặp ở:",
            answers: ["Thân vị", "Hang vị", "Tâm vị", "Phình vị"],
            correct: 1
        },
        {
            question: "H. pylori là vi khuẩn:",
            answers: ["Gram dương, kỵ khí", "Gram âm, xoắn khuẩn", "Gram âm, cầu khuẩn", "Gram dương, trực khuẩn"],
            correct: 1
        },
        {
            question: "Cytokine nào sau đây tham gia vào viêm dạ dày do H. pylori?",
            answers: ["IL-4", "IL-1 và TNF-α", "IL-10", "TGF-β"],
            correct: 1
        },
        {
            question: "Viêm dạ dày tự miễn chủ yếu ảnh hưởng đến vùng:",
            answers: ["Hang vị", "Đáy và thân vị", "Hành tá tràng", "Tâm vị"],
            correct: 1
        },
        {
            question: "Biểu hiện mô học đặc trưng của viêm dạ dày tự miễn:",
            answers: ["Tăng sản tế bào viền", "Hoại tử tuyến đáy", "Mất tế bào viền và tuyến nội tại", "Hạt hoại tử"],
            correct: 2
        },
        {
            question: "Viêm dạ dày tự miễn có thể gây:",
            answers: ["Tăng axit dịch vị", "Thiếu máu ác tính", "Hội chứng ruột kích thích", "Tăng gastrin thấp"],
            correct: 1
        },
        {
            question: "Đặc điểm mô học trong viêm dạ dày lympho:",
            answers: ["Tăng sản tế bào đáy", "Thâm nhập lympho nặng", "Viêm hạt không hoại tử", "Áp xe tuyến"],
            correct: 1
        },
        {
            question: "Viêm dạ dày hạt có thể liên quan đến bệnh nào?",
            answers: ["Bệnh Crohn", "Lupus", "Viêm gan tự miễn", "Hội chứng Zollinger-Ellison"],
            correct: 0
        },
        {
            question: "Biến chứng phổ biến của viêm dạ dày mạn:",
            answers: ["Hội chứng ruột ngắn", "Viêm đại tràng", "Chuyển sản ruột và loạn sản", "Tăng tiết pepsin"],
            correct: 2
        },
        {
            question: "Loét tá tràng thường do:",
            answers: ["Viêm dạ dày tự miễn", "Nhiễm H. pylori", "Bệnh Crohn", "U tuyến"],
            correct: 1
        },
        {
            question: "Loét dạ dày có xu hướng đau:",
            answers: ["Sau ăn", "Khi đói", "Ban đêm", "Sau vận động"],
            correct: 0
        },
        {
            question: "Yếu tố bảo vệ quan trọng nhất của niêm mạc dạ dày:",
            answers: ["HCl", "Chất nhầy và bicarbonate", "Pepsin", "Gastrin"],
            correct: 1
        },
        {
            question: "Chuyển sản ruột là:",
            answers: ["Biến đổi tuyến thành tế bào đáy", "Biến đổi biểu mô dạ dày thành biểu mô kiểu ruột", "Loét mãn", "Biến đổi tuyến thành tế bào sừng"],
            correct: 1
        },
        {
            question: "Chuyển sản ruột là yếu tố nguy cơ của:",
            answers: ["U carcinoid", "Ung thư biểu mô tuyến dạ dày", "U lympho ác tính", "Polyp tuyến"],
            correct: 1
        },
        {
            question: "Loạn sản là đặc điểm:",
            answers: ["Biến đổi tế bào viêm", "Thay đổi nhân và mất trật tự tế bào", "Biến đổi tế bào tiết nhầy", "Biến đổi thần kinh"],
            correct: 1
        },
        {
            question: "Mô học của loạn sản cho thấy:",
            answers: ["Tăng tiết pepsin", "Dị dạng nhân, mất cực tính", "Giảm mật độ tuyến", "Mất tế bào ly giải"],
            correct: 1
        },
        {
            question: "Viêm dạ dày mạn dẫn đến chuyển sản ruột do:",
            answers: ["Đáp ứng miễn dịch mạn tính", "Kích thích thức ăn", "Bất thường mạch máu", "Dùng antacid"],
            correct: 0
        },
        {
            question: "Phát hiện loạn sản có vai trò gì?",
            answers: ["Dự báo xuất huyết", "Dấu hiệu viêm nặng", "Cảnh báo nguy cơ ung thư", "Dấu hiệu tổn thương thận"],
            correct: 2
        },
        {
            question: "Chuyển sản ruột thường gặp ở:",
            answers: ["Dạ dày toàn bộ", "Vùng chuyển tiếp thân và hang", "Tá tràng", "Thực quản"],
            correct: 1
        },
        {
            question: "Bệnh Ménétrier đặc trưng bởi:",
            answers: ["Loét sâu", "Tăng sản tế bào foveolar", "Viêm tuyến đáy", "Thâm nhập lympho"],
            correct: 1
        },
        {
            question: "Bệnh Ménétrier liên quan đến:",
            answers: ["Tăng tiết pepsin", "Tăng biểu hiện TGF-α", "Thiếu máu nặng", "Tăng tiết gastrin"],
            correct: 1
        },
        {
            question: "Triệu chứng đặc trưng của bệnh Ménétrier:",
            answers: ["Viêm phúc mạc", "Tiêu chảy và phù do mất protein", "Chảy máu cấp", "Tăng tiết HCl"],
            correct: 1
        },
        {
            question: "Mô học bệnh Ménétrier:",
            answers: ["Teo tuyến đáy, tăng sản tế bào bề mặt", "Tăng sản lympho", "Viêm cấp tính", "Loét sâu"],
            correct: 0
        },
        {
            question: "Hội chứng Zollinger-Ellison do:",
            answers: ["Polyp tuyến", "U gastrin (gastrinoma)", "Viêm tuyến đáy", "H. pylori"],
            correct: 1
        },
        {
            question: "Tăng gastrin trong ZES gây:",
            answers: ["Tăng sản tế bào foveolar", "Tăng tiết acid và loét tá tràng", "Giảm hấp thu protein", "Tăng tiết bicarbonate"],
            correct: 1
        },
        {
            question: "Chẩn đoán ZES dựa vào:",
            answers: ["Nồng độ pepsin máu", "Nồng độ gastrin huyết thanh tăng cao", "Nội soi đại tràng", "Xét nghiệm H. pylori"],
            correct: 1
        },
        {
            question: "ZES có thể liên quan đến:",
            answers: ["Hội chứng MEN1", "Viêm loét đại tràng", "Xơ gan", "Bệnh Crohn"],
            correct: 0
        },
        {
            question: "Điều trị chính của ZES:",
            answers: ["PPIs", "NSAIDs", "Metformin", "Corticosteroid"],
            correct: 0
        },
        {
            question: "Biến chứng thường gặp của ZES:",
            answers: ["Thiếu máu ác tính", "Loét không lành, thủng và chảy máu", "Chuyển sản ruột", "Viêm gan mạn"],
            correct: 1
        },
        {
            question: "Loại u ác tính phổ biến nhất ở dạ dày là:",
            answers: ["Ung thư biểu mô tế bào vảy", "Lymphoma", "Ung thư biểu mô tuyến (adenocarcinoma)", "GIST"],
            correct: 2
        },
        {
            question: "Phân loại Lauren chia ung thư dạ dày thành:",
            answers: ["2 loại: lan tỏa và ruột", "3 loại: niêm mạc, dưới niêm và xâm lấn", "Dựa trên độ biệt hóa", "Theo giai đoạn TNM"],
            correct: 0
        },
        {
            question: "Đặc điểm mô học của thể lan tỏa (diffuse type) là:",
            answers: ["Tế bào giống tuyến rõ", "Tế bào đơn lẻ, thâm nhập lan rộng", "Tăng sản lympho", "Có cấu trúc tuyến"],
            correct: 1
        },
        {
            question: "\"Signet ring cell\" gặp trong:",
            answers: ["GIST", "Thể ruột của ung thư tuyến", "Thể lan tỏa của ung thư tuyến", "U lympho"],
            correct: 2
        },
        {
            question: "Yếu tố nguy cơ chính gây ung thư biểu mô tuyến dạ dày:",
            answers: ["Nhiễm H. pylori", "Virus EBV", "Ăn cay", "Viêm tụy mạn"],
            correct: 0
        },
        {
            question: "Lymphoma MALT của dạ dày thường liên quan đến:",
            answers: ["GIST", "EBV", "H. pylori", "Autoimmune gastritis"],
            correct: 2
        },
        {
            question: "Biểu hiện mô học đặc trưng của MALT lymphoma:",
            answers: ["Signet-ring cells", "Tế bào lympho nhỏ xâm nhập trung tâm tuyến", "Tăng sản foveolar", "Bạch cầu trung tính"],
            correct: 1
        },
        {
            question: "GIST (gastrointestinal stromal tumor) có nguồn gốc từ:",
            answers: ["Biểu mô tuyến", "Tế bào lympho", "Tế bào Cajal", "Cơ trơn"],
            correct: 2
        },
        {
            question: "Marker miễn dịch đặc trưng cho GIST:",
            answers: ["CD20", "CD117 (KIT)", "TTF-1", "CK20"],
            correct: 1
        },
        {
            question: "Đặc điểm mô học của GIST:",
            answers: ["Cấu trúc tuyến rõ", "Tế bào hình thoi hoặc hình biểu mô", "Tế bào signet ring", "Hạt viêm trung tâm"],
            correct: 1
        }
    ]
};

// Hàm để lấy tất cả câu hỏi
function getAllQuestions() {
    let allQuestions = [];
    for (let topic in questionsData) {
        allQuestions = allQuestions.concat(questionsData[topic].map(q => ({...q, topic: topic})));
    }
    return allQuestions;
}

// Hàm shuffle mảng
function shuffleArray(array) {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
}
