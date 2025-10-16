import { Card } from 'components/card';

export default function Page() {
    return (
        <div className="flex flex-col gap-12 sm:gap-16">
            <section>
                <h1 className="mb-4 text-4xl font-bold">شركة مجد الحجاز للخدمات الرقمية العامة</h1>
                <p className="mb-6 text-lg">
                    نحن شركة متخصصة في تقديم حلول رقمية شاملة للأعمال، مع التركيز على الجودة والابتكار.
                </p>
            </section>

            <section>
                <h2 className="mb-6 text-3xl font-bold">خدماتنا</h2>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    <Card title="تطوير المواقع الإلكترونية">
                        <p>نقوم بتصميم وتطوير مواقع إلكترونية احترافية تناسب احتياجات عملك.</p>
                    </Card>
                    <Card title="تطبيقات الهاتف المحمول">
                        <p>نطور تطبيقات متقدمة لنظامي iOS و Android بأعلى معايير الجودة.</p>
                    </Card>
                    <Card title="التسويق الرقمي">
                        <p>نساعدك على الوصول إلى جمهورك المستهدف من خلال استراتيجيات تسويق رقمية فعالة.</p>
                    </Card>
                    <Card title="الاستضافة والصيانة">
                        <p>نوفر خدمات استضافة آمنة وصيانة دورية لضمان استمرارية عملك.</p>
                    </Card>
                    <Card title="تحسين محركات البحث (SEO)">
                        <p>نحسن ظهور موقعك في نتائج البحث لزيادة الزيارات والعملاء المحتملين.</p>
                    </Card>
                    <Card title="الاستشارات التقنية">
                        <p>نقدم استشارات تقنية متخصصة لمساعدتك في اتخاذ القرارات الصحيحة.</p>
                    </Card>
                </div>
            </section>

            <section>
                <h2 className="mb-6 text-3xl font-bold">معلومات الاتصال</h2>
                <Card title="تواصل معنا">
                    <div className="space-y-2">
                        <p><strong>البريد الإلكتروني:</strong> info@majdalhjaz.com</p>
                        <p><strong>الهاتف:</strong> +966 XX XXX XXXX</p>
                        <p><strong>العنوان:</strong> المملكة العربية السعودية</p>
                    </div>
                </Card>
            </section>

            <section>
                <h2 className="mb-6 text-3xl font-bold">لماذا تختارنا؟</h2>
                <Card title="التميز في الخدمة">
                    <ul className="list-disc list-inside space-y-2">
                        <li>فريق عمل محترف ومتخصص</li>
                        <li>حلول مخصصة تناسب احتياجاتك</li>
                        <li>دعم فني على مدار الساعة</li>
                        <li>أسعار تنافسية ومرونة في الدفع</li>
                        <li>التزام بالمواعيد والجودة</li>
                    </ul>
                </Card>
            </section>
        </div>
    );
}
